const myArr = ['java','python','cpp','php','html']

// myArr.forEach(function (values) {
//     console.log(values);

// })


// myArr.forEach((values2)=>{
//     console.log(values2);
    
// })


// myArr.forEach((values,index,arr) => {
//     console.log(values,index,arr);
    
// })


const myArr2 = [
    {
        name : 'chinmay',
        age : 21,
        clg : 'dyp'
    },
    {
        name : 'aditya',
        age : 21,
        clg : 'kit'
    },
    {
        name : 'yash',
        age : 20,
        clg : "dkt"
    }
]

myArr2.forEach(function(items) {
    console.log(items.name,items.age);
    
})