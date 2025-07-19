const marvel_heros = ["thor","IronMan", "spiderman"]
const dc_heros = ["superMan", "Flash","batMan"]

//marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(marvel_heros);

const all_new_heros =[...marvel_heros, ...dc_heros]//to give
//console.log(all_new_heros);
const another_array = [1, 2, 3, [4, 5,6], 7, [6, 7,[4, 5]] ]

const real_another_array = another_array.flat(Infinity)
//flat()-Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
//console.log(real_another_array);

// console.log(Array.isArray("Hitesh"))//to check that given is array or not 
// console.log(Array.from("Hitesh"))//from-use to make it array 
// console.log(Array.from({name:"Hitesh"}))//it can't convert directly. there you have to say that to make arrays from  keys or from value 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
//A set of elements to include in the new array object.
//Returns a new array from a set of elements.



