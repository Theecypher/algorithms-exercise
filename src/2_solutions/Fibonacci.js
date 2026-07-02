// def fibonacci(n):
//     # Base case: 0 and 1 return themselves
//     if n <= 1:
//         return n
//     # Recursive step
//     else:
//         return fibonacci(n - 1) + fibonacci(n - 2)

// # Example: Finding the 6th Fibonacci number
// print(fibonacci(6))  # Output: 8



function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}


console.log(fib(7));

function fibs(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibs(n - 1) + fibs(n - 2);
  }
}

console.log(fibs(7));