// confirm("do you really want to delete?");

// let name = prompt("enter your name");

// alert("Hello "+name);
// alert(`HELLO ${name}`);

// let number1 = Number(prompt("enter first number "));
// let number2 = Number(prompt("enter second number "));

// let sum = number1 + number2;
// alert("sum = " + sum);

// let num1 = 23;
// let num2 = 90;

// let sum2 = num1 + num2;

// console.log("sum = "+sum2)

let user_display = document.getElementById("info");

let age = Number(prompt("enter age"));
let left_years = 18 - age;
if (age >= 18) {
  alert("Nice one, you are qualified");
}else{
    user_display.textContent = "Please you have "+ left_years +" years left to use this app";
}
