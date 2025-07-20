

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
console.log(loginUserMessage("bihari"))
