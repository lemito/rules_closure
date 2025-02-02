// Copyright 2016 The Closure Rules Authors. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

//goog.require('goog.asserts');
//goog.require('goog.testing.asserts');
//goog.require('goog.testing.jsunit');
goog.require('io.bazel.rules.closure.Greeter');


function testGreet() {
  var greeter = new io.bazel.rules.closure.Greeter('Justine');
  greeter.greet();
  var body = document.body;
console.log(body.innerHTML);
//  goog.asserts.assert(body != null);
//  assertHTMLEquals('<p>Hello <b>Justine</b>!', body.innerHTML);
}
