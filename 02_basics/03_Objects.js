//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false 
//console.log(tinderUser);

const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname:{
        firstname: "abhishekh",
        lastname: "bihari"

        }

    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1, obj2}there is same issue while printing that object inside object
const obj3 = Object.assign({},obj1, obj2)// {} -it returns the modified target object.
console.log(obj3);
