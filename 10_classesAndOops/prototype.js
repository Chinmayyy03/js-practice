let myhero = ['thor','spiderman']

let heropower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderman: function(){
        console.log(`spiderman power is ${this.spiderman}`);
        
    }
}

// console.log(heropower.getSpiderman());


Object.prototype.chinmay = function(){
    console.log(`chinmay is present in all objects`);  
}

Array.prototype.heychinmay = function(){
    console.log(`heychinmay is present in all arrays `);
    
}

// heropower.chinmay()
// myhero.chinmay()


// myhero.heychinmay()
// heropower.heychinmay()



//          Inheritance


const user = {
    name:'Chinmay'
}

const teacher = {
    makeVideos: true
}

const teachingSupport ={
    isAvailable: false
}

const taSupport = {
    makeAssignment: 'js assignment',
    fulltime : true,
    __proto__: teachingSupport
}

teacher.__proto__= user

Object.setPrototypeOf(teachingSupport,teacher)

string1 = "chinmay"

let username1 = "ChaiAurCode"
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is: ${this.trim().length}`);
    
}
// username1.trueLength()
// string1.trueLength()





function setusername(username2) {
    this.username2 = username2
    console.log('called');
}

function createUser(username2,name,password) {
    setusername.call(this,username2)

    this.name = name
    this.password = password
}

const show = new createUser('demo','chinmay','123')
console.log(show);
