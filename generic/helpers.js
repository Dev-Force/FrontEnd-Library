/**
 * Created by Tolis on 29/5/2016.
 */

/**
 * Check for existence of args key inside defaults.
 * If there is any, inject it
 * 
 * @param toBeChanged the original list (available params)
 * @param toInject    the list that user inputs
 * @returns {*}
 */
function mergeObjects(toBeChanged, toInject) {
  if(toInject != null) {
    for (let d in toBeChanged) {
      if (d in toInject) {
        toBeChanged[d] = toInject[d];
      }
    }
  }
  return toBeChanged;
}

/**
 * Make all args, instance variables
 * 
 * @param args
 */
function setupInstanceVars(args) {
  for(let a in args) {
    this[a] = args[a];
  }
}

/**
 * Combine setupInstanceVars and mergeObjects functions
 * and set availableArgs as instance variable
 * 
 * @param toBeChanged
 * @param toInject
 */
function mergeAndSetupInstanceVars(toBeChanged, toInject) {
  this[toBeChanged] = mergeObjects(this[toBeChanged], toInject);
  setupInstanceVars.call(this, this[toBeChanged]);
}

/**
 * Convert an array to dictionary
 * @param {[]}  arr
 * @returns {{}}
 */
function objectArrayToDict(arr) {
  let dict = {};
  arr.forEach((item) => {
    dict[item] = this[item];
  });
  return dict;
}

/**
 * return an array of a range of numbers
 * usage:
 * range(1).forEach() {(number) => {callback}}
 * 
 * @param  {Number} start where to start
 * @param  {Number} stop  where to stop
 * @param  {Number} step  iteration step
 * @return {Number[]}     constructed array
 */
function range(start = 0, stop, step = 1) {
  let arr = [];
  for(let i=start; i<stop; i+=step) {
    arr[] = i;
  }
  return arr;
}

