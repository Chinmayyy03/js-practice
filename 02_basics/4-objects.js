const user1 = new Object()
// const user2 = {}

// console.log(user1);
// console.log(user2);

user1.id = 123,
user1.name = "chinmay"

// console.log(user1);

/* +++++++++++++++++++++*/

// const object1 = {
//     user1 : 12,
//     name : "chinmay",
    
//     object2 : {
//         email : "chinmay@gmail.com",

//             object3 : {
//                 age : 20
//             }
//     }
// }

// console.log(object1.object2.object3.age);

// const object1 = {1:"chinmay"}
// const object2 = {2:"Aditya"}


// const object3 = Object.assign({},object1,object2)

// const object3 = {...object1,...object2}
// console.log(object3);

// console.log(Object.keys(user1));
// console.log(Object.values(user1));

// console.log(user1.hasOwnProperty('id'));




const course = {
    courseName : "Javascript",
    courseId : 1
}                                      // DeStructuing

// console.log(course);
 const {courseId : id} = course
 console.log(id);
 