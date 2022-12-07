let s = "helloworld";

function checkPrime(num) {
  var count = 0;

  for (var i = 1; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  }

  //   console.log(count);

  if (count <= 2) {
    console.log("Prime number");
  } else {
    console.log("Not a prime number");
  }
}

checkPrime(2);
