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

user.welcomeMessage()
console.log(this);
