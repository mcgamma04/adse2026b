const fruits = ["mango", "apple", "orange", "lemon"];

//length
let num_of_items = fruits.length;
// console.log(num_of_items);
// access arrow
let first_item = fruits[0];
let last_items = fruits[fruits.length - 1];

// first items
fruits.push("Pineaple");
// removed last
fruits.pop();

// add to the begin of array
fruits.unshift("Cucumber");
// remoe first

fruits.shift();
// console.log(fruits.at(num_of_items - 1));

// console.log(first_item)

// add to middle or remove
fruits.splice(1, 0, "Grape");

fruits.splice(2, 1);

fruits[2] = "kiwi";

// console.log(fruits);

// for(let i=0;i<fruits.length; i++){
//     console.log(i+":"+fruits[i]);
// }

// let i = 0;
// while(i<fruits.length){
//     console.log(fruits[i]);
//     i++;
// }

// for(let fruit of fruits){
//     console.log(fruit);
// }

//sum all even number

// function sumEven(numbers) {
//   let sum = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 0) {
//       sum += numbers[i];
//     }
//   }
//   return sum;
// }

// console.log(sumEven([1, 2, 3, 4, 5]));

const TARGET_NUMBER = 30;
function sumAbove50(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= TARGET_NUMBER) {
      sum += numbers[i];
    }
  }

  return sum;
}
// console.log(sumAbove50([6,90]));


// console.log(sumAbove50([6,12,50,30,10,100]));


