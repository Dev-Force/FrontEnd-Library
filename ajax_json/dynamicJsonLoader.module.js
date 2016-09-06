
// JQuery is a Dependency
class dynamicJsonLoader {

  constructor(url) {
    this.url = url;
  }

  getContent(data, done, fail) {
    // make ajax call and return data through a promise (done, fail)
    return $.ajax({
      url: this.url,
      data: data,
      contentType: 'application/json; charset=utf-8',
      dataType: 'json'
    })
      .done(done)
      .fail(fail);
  }

}


