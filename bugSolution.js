function foo(a, b) {
  // Handle null values by treating them as 0
  a = a === null ? 0 : a;
  b = b === null ? 0 : b;
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // 2
console.log(foo(1, null)); // 1
console.log(foo(null, null)); // 0

//Alternative solution: Throw an error for null values
function fooErrorHandling(a, b) {
  if (a === null || b === null) {
    throw new Error("Null values are not allowed");
  }
  return a + b;
}

//console.log(fooErrorHandling(1,2)); //3
//console.log(fooErrorHandling(null,2)); // Throws an error
//console.log(fooErrorHandling(1, null)); // Throws an error
//console.log(fooErrorHandling(null, null)); // Throws an error