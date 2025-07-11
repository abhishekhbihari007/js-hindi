const name ="bihari" //this is how string gets declared
const repoCount = 50

//console.log(name + repoCount + "value"); 
//it is basic and outdated

//console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('biharii')//anotherway to declare string

// console.log(gameName[0]);  
// console.log(gameName.__proto__);


// console.log(gameName.length)
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(3)); //to know at which index which word is there
console.log(gameName.indexOf('t')); //to know that any word is at which position

const newString = gameName.substring(0,5)//it will not give the negative value 
console.log(newString);

const anotherString = gameName.slice(-7, 4)
console.log(anotherString);

const newStringOne = "      bihari   "
console.log(newStringOne);
console.log(newStringOne.trim());//trim is used to remove extra spaces 

