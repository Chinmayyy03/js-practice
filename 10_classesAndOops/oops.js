const user = {
    username:'Chinmay',
    loginCount:4,
    signedIn:true,

    getUserDetails: function () {
        // console.log('got user details from database');
        // console.log(`username:${this.username}`);
        console.log(this);    
        
    }
}
// console.log(this);
// console.log(user.username);
// console.log(user.getUserDetails());



function User(username,loginCount,isLoggedIn) {
    this.username = username; 
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function(){
        console.log(`welcome ${this.username}`);
        
    }

    return this
}

const userOne = new User('Chinmay', 4, true)
const Usertwo = new User('Aditya',8,true)
console.log(userOne.constructor);
// console.log(Usertwo);

