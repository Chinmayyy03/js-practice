class User {
    constructor(email,password) {
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value
    }
}

const chinmay = new User('chinmay@gmail.com','abc')
// console.log(chinmay.password);
// console.log(chinmay.email);

console.log(chinmay);

