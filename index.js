function receivesAFunction(callback) {
  callback(); // call the function passed in
}

function returnsANamedFunction() {
  function namedFunction() {
    console.log("I'm a named function!");
  }
  return namedFunction;
}

function returnsAnAnonymousFunction() {
  return function () {
    console.log("I'm anonymous!");
  };
}

