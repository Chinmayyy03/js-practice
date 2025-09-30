const user = {
    username: "chinmay",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to my website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username="Aditya"
// user.welcomeMessage()

// user.welcomeMessage()
// console.log(this);

// const chai = function (){
//     let username = "chinmay"
//     console.log(this.username)
// }

// const chai = () => {
//     let username = "chinmay"
//     console.log(this)
// }

// chai()


// const add =(num1, num2) =>{
//     return num1+num2
// }
// console.log(add(3,4));

const add =(num1, num2) => (num1+num2)
console.log(add(3,4));

const addTwo =() => ({username:"chinmay"})

console.log(addTwo());



const myArray = [1,2,3,4]
  


