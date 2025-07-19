const score = 400
//console.log(score);

const balance = new Number (100)
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(2));//it is mostly to fix the precision value .number in the bracket is showing after point how much zeros there will be 

const otherNUmber = 123.8699

//console.log(otherNUmber.toPrecision(3));

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en_IN'));

//*******************MAths***************************
// console.log(Math);
// console.log(Math.abs(4));
// console.log(Math.abs(-4));
// //here, abs is used make negative number to positive but if 
// // the number is positive then it don't change.
// console.log(Math.round(4.6));//mostly round is used
// console.log(Math.floor(4.9));//floor means ground so it it take groung number
// console.log(Math.ceil(4.2));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);//to roundoff the value

const min = 10
const max = 30

console.log(Math.floor(Math.random()*( max- min + 1))+ min );
// Line27-math.random =gives values in zero (0.4, 0..7, 0.9)
