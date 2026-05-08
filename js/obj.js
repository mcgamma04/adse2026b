let user = {
  firstName: "Princess",
  lastName: "Jumbo",
  depth: 3000,
  email: "pr@gmail.com",
  password: "123456",
  salary: 4000,
  isActive: true,
  isLoggedIn: true,
  skills: ["HTML", "CSS", "AI"],
  role: {
    title: "Engineer",
    level: "Junior",
  },
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// console.log(user)
//keys are name, depth and isActives

// access object
// 1. dot notation
// 2. bracket notation

// console.log(user.name)
// console.log(user["depth"])

user.depth = 8000;
// console.log(user);
user.gender = "Male";
// console.log(user);

// delete user.gender;
// console.log(user.fullName());

user.takeHome = function (amount) {
  return (this.salary += amount);
};

// console.log(user.takeHome(300));
// console.log(Object.values(user)[0]);
// console.log(Object.keys(user))

// for(let key in user){
//     console.log(key, user[key])
// }

const { email, password } = user;
console.log(`email: ${email}, password: ${password}`)
