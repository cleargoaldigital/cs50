**Some Javascripts Concepts**

*Things I learnt after rereading concepts from multiple materials:**

**Parameters**
These are variables _which_ act as placeholders for values that will be passed into a function when it is called.

function myTestFunction(a, b){
   console.log(a, b);
}

The _a_, _b_ are mere temporary representatives of values that would eventually be passed into a function when it is *called*, i.e used.

**Arguments:** These are values which are passed into a function when it is called. That is, they are the basis of the action expected from the function into which they are passed.

function myTestFunction(2, 5){
   console.log(2, 5);
}

In this instance, the variables "a" and "b" will be equal to 2 and 5 respectively. 

It should be noted that different arguments can be passed into a function multiple times and the parameters.

_Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console._
_Call the function with two numbers as arguments._

**Return**
A return statement is used to send a value back from a function. It's usually written at the end of a function block. Without a return statement, a function will not produce(return) any value when it's called.

**Scope**
Scope refers to the visibility of variables in a javascript code. Variables which are defined outside of a function block have Global scope. In other words, they can be seen everywhere in the JavaScript code. However, when variables are declared without the *let or const* they are automatically created in the global scope. 

**Initialize**
To set/assign a value to a variable.
