#!/usr/bin/env node

fibo = function(x) {
  if (x < 2) {
    return x;
  }
  return fibo(x - 1) + fibo(x - 2);
}

  x = process.argv[2];
  console.log("computing fibo(" + x + ") ...");
  y = fibo(x);
  console.log("fibo(" + x + ") = " + y);


