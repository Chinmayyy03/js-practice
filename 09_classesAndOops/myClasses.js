class user {
    constructor(username,email,password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const show = new user('chinmay','chinmay@gmail.com','123')
console.log(show.encryptPassword());

console.log(show.changeUserName());

