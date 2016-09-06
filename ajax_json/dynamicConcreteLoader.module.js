
// Usage:
// var test = new dynamicConcreteLoader(url, limit, offset);
// test.getConcrete();

class dynamicConcreteLoader extends dynamicJsonLoader {

  constructor(url, args) {
    super(url);

    this.availableArgs = {
      limit: 5,
      offset: 0,
      errorMessage: 'Failed to load resources',
      noResults: false,
      handleData: function(data) {
        console.log(data);
      },
      done: (data, textStatus, jqXHR) => {
        // Some application Logic Here

        this.handleData(data);
      },
      fail: (jqXHR, textStatus, errorThrown) => {
        this.handleData({
          error: this.errorMessage
        });
      }
    };

    mergeAndSetupInstanceVars.call(this, 'availableArgs', args);
  }

  getConcrete() {

    let data = objectArrayToDict.call(this, ['array']);
    let result = this.getContent(
      data,
      this.done,
      this.fail
    );

    return result;
  }

}
