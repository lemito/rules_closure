
goog.require('io.bazel.rules.closure.Greeter');


function testGreet() {
  var greeter = new io.bazel.rules.closure.Greeter('Justine', [
    { name: 'Jen', numWaffles: 1 },
    { name: 'Kai', numWaffles: 3 },
    { name: 'Lex', numWaffles: 1 },
    { name: 'Mel', numWaffles: 2 }
  ]);
  // greeter.greet();
  var body = document.body;
  // body.innerHTML;
  // body.innerHTML = greeter.greet();
  // console.log(body.innerHTML);,
  greeter.greet();
  // console.log(greeter.greet());
}
testGreet();