
var c= 300//this is global scope 

if (true){
    let a = 10 
    const b = 20
    var c = 30 
    console.log("INNER: " , a);
}//this is block scope , its value will not go out 
let a = 10 
const b = 20
//console.log("INNER", a);
//function ad



//console.log(a);
//console.log(b);
//console.log(c);

function one (){
    const username = "dragon" 

    function two (){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()

}

//one()

if (true){
    const username = " dragon"
    if (username === "dragon"){
        const website = "youtube"
        console.log(username + website);

    } 
    // console.log(website);

}
// console.log(username);