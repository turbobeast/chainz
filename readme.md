## Chainz

Helps call an array of async functions in order, by injecting a next callback.


```javascript
  var chain = require('chainz');

  var ayncFunctionOne (next) {
    //do something asnyc
    next(); // calls asyncFunctionTwo
  };

  var asyncFunctionTwo (next) {
    next(); //calls async function three
  };

  var asyncFunctionThree () {
    //done
  };

  chain([asyncFunctionOne, asyncFunctionTwo, asyncFunctionThree]);

```
