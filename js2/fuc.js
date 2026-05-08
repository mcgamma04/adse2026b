// console.log(greet());
// console.log(greet);

let userInfo = document.querySelector("#user_info");
let btn = document.querySelector("#btn_prosper");

let greet = (name, email) => {
  userInfo.innerHTML = `Hello, ${name}, you arw welcome, we will contact you shortly through  ${email}`;
};

btn.addEventListener("click", () => {
  let username = document.querySelector("#username").value;
  let email = document.querySelector("#email").value;
  greet(username, email);
});

// console.log(greet("Divine"));

// function greet2() {
//   return "this is second msg";
// }
// console.log(greet2());
