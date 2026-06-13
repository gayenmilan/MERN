const array = [];

//push
array.push('banana', 'mango', 'apple');

//console.log(array); //[ 'banana', 'mango', 'apple' ]

// array.shift(); 

//console.log(array); //[ 'mango', 'apple' ]

array.push('abc', 'xyz', 'bcd');

console.log(array)

const shifted = 3;

for(let i=0; i < 3; i++ ){
    array.shift(i);
}

console.log(array);


