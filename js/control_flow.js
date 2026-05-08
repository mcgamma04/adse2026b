let age = 16;

// if (age >= 18) {
//   console.log("You are eligible to use this app. ");
// } else {
//   console.log("You are not eligible");
// }

// tenary operator

 let result =  age >= 18 ? "You are eligible to use this app." : "You are not eligible";

console.log(result);

// nested if
let state = "Delta";
let driver_license = true;

// console.log(driver_license)

// if(state === "Delta"){
//     if(driver_license){
//    console.log("Congratulations, you are permitted to drive..")
//     }
// }

// if(state ==="Delta1" && driver_license){
//     console.log("Congratulations, you are permitted to drive..")
// }else{
//     console.error("incorrect details")
// }

// let email = prompt("enter your email: ");
// let password = prompt("enter your password: ");

// if(email=="abc@gmail.com" && password=="123456"){
//     alert("congratulations, you can proceed");
// }else{
//     alert("invalid email or password combination");
// }

// let traffic_light = "hack";

// if (traffic_light == "stop") {
//   console.log("Please stop..");
// } else if (traffic_light == "blue") {
//   console.log("Please get ready");
// } else if (traffic_light == "green") {
//   console.log("Start moving");
// }else{
//     console.log("Unexpected error... ")
// }


When squirrels get together for a party, they like to have cigars. 
A squirrel party is successful when the number of cigars is between 40 and 60,
 inclusive. Unless it is the weekend, in which case there is no upper bound on 
 the number of cigars.
  Return true if the party with the given values is successful, or false otherwise.

Examples

cigarParty(30, false) → false
cigarParty(50, false) → true
cigarParty(70, true) → true