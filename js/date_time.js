const current = new Date();

// console.log(current);
// let year = current.getFullYear();
let day = current.getDay();
// console.log(year);

let month = current.getMonth();

// console.log(month+1);

let dayOfMonth = current.getDate();
// console.log(dayOfMonth);

let hours = current.getHours();
// console.log(hours);

// 10:03:23

// console.log( current.toDateString().split(" "));
// console.log(current.toTimeString())

// console.log(current.toLocaleDateString());

// console.log(current.toLocaleTimeString());

const future_date = current.getDate() + 7;
// console.log(future_date);

const start = new Date("2026-05-13");
const end = new Date("2026-05-20");

let diff = end - start;

let days = diff / (1000 * 60 * 60 * 24);

console.log(days);

function User_birthday(birthday) {
  let bday = new Date(birthday);
  let now = new Date().toISOString().split("T")[0];

  let diff = bday - new Date(now);

  return diff / (1000 * 60 * 60 * 24);
}

console.log(User_birthday("2026-08-07"));
