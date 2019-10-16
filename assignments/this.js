/*
  The for principles of `this`:
  In your own words. explain the four principle for the `this` keyword below.
  
  1. When used in the global context and not using "use strict", then `this` refers to the current window (at least in a browser).
  
  2. When used within an object (literal or otherwise), then `this` refers to that object.
  
  3. When an object is created with `new`, then that object's constructor uses `this` to refers to the newly initialized object.
  
  4. When a function `fn`'s `.call()`, `.apply()`, or `.bind()` methods are used, then the first argument of those methods (if provided) is what `this` refers to within `fn`.
  
  Write out a code example of each explanation above.
*/

///#####################################
/// TOOLS
///#####################################

function heading (content) {
  console .log (`\n### ${content} ###\n`);
}

///#####################################
/// SHARED DATA
///#####################################

const data = {
  a : "I am the eggman",
  b : "they are the eggmen",
  c : "I am the walrus",
  d : "goo goo g'joob"
};

///#####################################
/// PRINCIPLE 1
/// code example for Window Binding
///#####################################

heading ("PRINCIPLE 1");

console .log (this);

///#####################################
/// PRINCIPLE 2
/// code example for Implicit Binding
///#####################################

heading ("PRINCIPLE 2");

const myImplicitThis = {
  a : data.a,
  b : data.b,
  c : data.c,
  d : data.d,
  singImplicitly : function () {
    console .log (
      `${this.a} / ${this.b} / ${this.c} / ${this.d}`
    );
  }
};

myImplicitThis .singImplicitly ();

///#####################################
/// PRINCIPLE 3
/// code example for New Binding
///#####################################

heading ("PRINCIPLE 3");

const NewThis = function (attrs) {
  this .a = attrs .a ;
  this .b = attrs .b ;
  this .c = attrs .c ;
  this .d = attrs .d ;
};

let singNewly = function (obj) {
  console .log (
    `${obj.a} / ${obj.b} / ${obj.c} / ${obj.d}`
  );
};

const myNewThis = new NewThis (data);
singNewly (myNewThis);

///#####################################
/// PRINCIPLE 4
/// code example for Explicit Binding
///#####################################

heading ("PRINCIPLE 4");

let singExplicitly = function () {
  console .log (
    `${this.a} / ${this.b} / ${this.c} / ${this.d}`
  );
};

// it's not what you think!
singExplicitly .apply (data , []);
