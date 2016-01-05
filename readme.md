## Chainz

[![Build Status](https://travis-ci.org/turbobeast/chainz.svg)](https://travis-ci.org/turbobeast/chainz)

Helps call an array of async functions in order, by injecting a next callback.

```javascript
  var chain = require('chainz');

  const asyncFunctionOne = next => {
    // do something asnyc
    next('cheese'); // calls asyncFunctionTwo
  };

  const asyncFunctionTwo = (message, next) => {
    // do something asnyc
    console.log(message); // cheese
    next('peanut butter'); // calls asyncFunctionThree
  };

  const asyncFunctionThree = message => {
    // done
    console.log(message); // peanut butter
  };

  chain(asyncFunctionOne, asyncFunctionTwo, asyncFunctionThree);

```
