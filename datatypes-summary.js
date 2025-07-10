// There are 2 different datatypes

// PRIMITIVE

// 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.3

const isloggedIn = false 
const outsidetemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 65461385165163581n

// Non-PRIMITIVE

//Refrence
//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj={
    name: "bihari",
    age: 23,
}

const myFunction = function(){
    console.log("Hello World");
}

//console.log( typeof bigNumber);
//console.log( typeof outsidetemp);
console.log( typeof myFunction); (this)

//https://262.ecma-international.org/5.1/#sec-11.4.3

//Return type of variables in JavaScript
//1) Primitive Datatypes
       //Number => number
       //String  => string
       //Boolean  => boolean
       //null  => object
       //undefined  =>  undefined
      //Symbol  =>  symbol
      //BigInt  =>  bigint

//2) Non-primitive Datatypes
       //Arrays  =>  object
       //Function  =>  function
       //Object  =>  object

