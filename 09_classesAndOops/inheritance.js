class user {
    constructor(username) {
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`); 
    }
}

class teacher extends user {
    constructor(username,email,password) {
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`a new couse was added by ${this.username}`);
    }
}

const show = new teacher('chinmay','chinmay@gmail.com','123')
show.addCourse()

const show2 = new user('aditya')
show2.logMe()