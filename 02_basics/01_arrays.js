//array - is a object ,storing collection of multiple items under a single variable
//JavaScript arrays are resizable and can contain a mix of different data types
//JavaArrays starts with zero indexing

const myArr = [0,1,2,3,4]
const myHeros = ["spiderMan","shaktiMan"]

const myArr2 = new Array(1, 2, 3, 4,)
//console.log(myArr[1]);

//Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)// to add any element in first 
// myArr.shift()


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));
const newArr = myArr.join()

// console.log(myArr);
// console.log(  newArr);

//slice , splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log(myn2);
