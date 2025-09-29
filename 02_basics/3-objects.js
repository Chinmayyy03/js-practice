
const mykey = Symbol("key1")

const userInfo = {
    [mykey] : "mykey1",
    name : "chinmay",
    age : 20,
    email : "chinmay@gmail.com",
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(userInfo.lastLoginDays);
// console.log(userInfo);

// userInfo.email = "ghevad@gmail.com"
// console.log(userInfo.email);
// Object.freeze(userInfo)
// userInfo.email = "aditya@gmail.com"
// console.log(userInfo[email]);

userInfo.greeting = function (){
    console.log(`hello ${this.name}`);
}

console.log(userInfo);
console.log(userInfo.greeting());
