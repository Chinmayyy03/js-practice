
function sayMyName(){
console.log("C");
console.log("h");
console.log("i");
console.log("n");
console.log("m");
console.log("a");
console.log("y");
}

// sayMyName

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }


function addTwoNumbers(number1,number2){
    // let result= number1 + number2
    // return result

    return number1+number2
}

const result = addTwoNumbers(3,5)
// console.log("Result:", result);


function loginUserMessage(username = "sam"){
    if (!username) {
    console.log("Please enter a username");
    return     
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("chinmay"))
// console.log(loginUserMessage("Chinmay"))


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

const user = {
    name : "chinmay",
    age : 21
}

function handleObject(anyobject){
    console.log(`My name is ${anyobject.name} and my age is ${anyobject.age}`);  
}

// handleObject(user)

// handleObject({
//     name:"Aditya",
//     age:21
// })

const arr = [200,300,400]

function getSecoundArray (getArray){
    return getArray[1]
}

console.log(getSecoundArray(arr));


