/*
*Assignment For Session 6:*


2-Write a function that takes a number as an argument and returns true if the number is even, and false if it's odd


*/

function num(a) {
   b = a%2;
  if(b==0){
    return true;
  }
  else{
    return false;
  }
}


let z = num(prompt("Enter any number."));

console.log(z);
