

function sayMyName(){
console.log("b");
console.log("i");
console.log("h");
console.log("a");
console.log("r");
console.log("i");
}
//sayMyName()
function addTwoNumbers (number1,number2 ){ //they r parameters

    // let result = number1+number2
    // return result 
    //console.log("bihari") this is unrechable bcz after return it will not work 
    return number1+number2

}

const result = addTwoNumbers(3,5)//arguments - when u r calling a function

//console.log("Result", result)

function loginUserMessage(username){
    if(username == undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in `
}

//console.log(loginUserMessage("bihari"))
// console.log(loginUserMessage("bihari"))


function calculateCartPrice(val1, val2, ...num1){//(...)-rest /spread operator
    return num1
}
// console.log(calculateCartPrice(200, 400,600,2000))
//its output is in array

const user = {
    username: "bihari",
    prices: 199
}

function handleObject(anyobject){
    //console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}
// handleObject(user)
handleObject({
    username: "dragon",
    price: 399
})
const myNewArray = [200, 300, 400 ,500,600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 600, 1000]));
