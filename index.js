var ChainGang = function (gang) {

  var next = function () {
    if(gang.length > 0) {
      gang.shift()();
    }
  };

  function Chain (func) {
    if(typeof func !== 'function') {
      console.warn('every element in array, must be a function');
      func = next;
    }
    return function () {
      var args = Array.prototype.slice.call(arguments);
      args.push(next);
      func.apply(null, args);
    };
  }

  var gang = gang.map(Chain);
  next();

};

module.exports = ChainGang;
