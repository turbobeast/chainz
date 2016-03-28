const chainz = (...gangs) => {
  let gang = [];
  const next = function (...args) {
    if(gang.length > 0) {
      gang.shift()(...args);
    }
  };

  const Chain = func => {
    if(typeof func !== 'function') {
      console.warn('every argument must be a function');
      func = next;
    }
    return function (...args) {
      args.push(next);
      // run next event loop
      setTimeout(func.bind(Object.create(null), ...args), 0);
    };
  };

  gang = gangs.map(Chain);
  next();
};

module.exports = chainz;
