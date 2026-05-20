const sumOnlyString = (arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "string") {
      sum += Number(arr[i]);
    }
  }

  return sum;
};

console.log(sumOnlyString([2, 3,"1", 20,200,"52"]));
