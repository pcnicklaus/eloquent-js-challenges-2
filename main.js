//challenge one//
for (var triangle = "#"; triangle.length < 7; triangle += "#") {
  console.log(triangle);
}
console.log(triangle);


//challenge two//
for (var fizz = 1; fizz < 100; fizz ++ ) {
	if ((fizz % 3 === 0) && (fizz % 5 === 0))
      console.log("FizzBuzz")
  	else if (fizz % 3 === 0)
      console.log("Fizz")
    else if (fizz % 5 === 0)
      console.log("Buzz")
    else
      console.log(fizz)
}
console.log(fizz);

//challenge three//
for (var i = 0; i < 8; i++) {
  var line = ""
  for (var j = 1; j <=8; j ++) {
    if(j % 2 === i % 2)
      line += "#";
    else
      line += " ";

 }
  console.log(line)
}
