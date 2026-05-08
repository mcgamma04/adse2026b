function removeDuplicate(arr){
    let withoutDuplicate = [];

    for(let i=0; i<arr.length; i++){
        if(!withoutDuplicate.includes(arr[i])){
            withoutDuplicate.push(arr[i]);
        }
    }
    return withoutDuplicate;
}


// console.log(removeDuplicate([1,2,1,3,4,1,5,2,5,6]));


function getMax(arr){
    let maxSalary = arr[0];
   
    for(let i=0; i<arr.length; i++){

        if(maxSalary < arr[i]){
          maxSalary = arr[i];
        }
    }

    return maxSalary;
}

// console.log(getMax([30,20,23,100,120,20,21]));

function firstthreeHighestPrice(arr){
  
let result = arr.sort((a , b)=>b - a );

return result.slice(0, 3);

}

let prices = [60,100,200,180,500,20];

// console.log(firstthreeHighestPrice(prices))

// prices.sort((a , b)=>b - a );

// console.log(prices);

let price2 =prices.slice(2,4);

console.log(price2)

