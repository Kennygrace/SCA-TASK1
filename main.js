/* Write a JavaScript function that takes in two integers and display the larger 

 var num1, num2;
num1 = window.prompt("Input the First integer", "0");
num2 = window.prompt("Input the second integer", "0");
                                                 
if(num1 > num2) 
  { 
  document.write("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ". <br>");
  }   
else
  if(num2 > num1) 
  {
    document.write("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ". <br>");
  }                  
else
  {
    document.write("The values "+ num1+ " and "+num2+ " are equal. <br>");
  }
  
   Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and display a message to the screen. sample output: 0 is even, 1 is odd, 2 is even  
  
for (var x=0; x<=20; x++) {
    if (x === 0) {
            document.write(x +  " is even <br>");
    }
    else if (x % 2 === 0) {
           document.write(x + " is even <br>");   
    }
    else {
            document.write(x + " is odd <br>");
    }
}

 Write a JvaScript function that iterate the integers from 1 to 100. But for multiples of three print "fizz" instead of the number and for the multiples of five print "buzz". For numbers which are multiples of both five and three print "fizzbuzz". 
   
   for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        document.write(i + "FizzBuzz <br>");
    }
    else if (i % 3 === 0) {
        document.write(i + " Fizz <br>");
    }
    else if (i % 5 === 0) {
        document.write(i + " Buzz <br>");
    }
    else {
        document.write(i + "<br>");
    }
} */