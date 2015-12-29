## Chainz

Helps call an array of async functions in order, by injecting a next callback.


```javascript
  var chain = require('chainz');

  function ayncFunctionOne (next) {
    //do something asnyc
    next(); // calls asyncFunctionTwo
  };

  function asyncFunctionTwo (next) {
    //do something asnyc
    next(); //calls asyncFunctionThree
  };

  function asyncFunctionThree () {
    //done
  };

  chain([asyncFunctionOne, asyncFunctionTwo, asyncFunctionThree]);

```
