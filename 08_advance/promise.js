// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log('Async task is  completed');
//         resolve()
//     }, 1000);
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");  
// })


// new Promise(function(resolve,restart){
//     setTimeout(() => {
//         console.log("Async again completed");
//         resolve()
//     }, 1000);
// }).then(function(){
//     console.log("Promise consumed 2");  
// })


// const promiseTwo = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve({username: 'chinmay', email: 'chinmay2gmail.com'})
//     }, 1000);
// })

// promiseTwo.then(function(user){
//     console.log(user);
    
// })


// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         let error = true;
//         if (!error) {
//             resolve({username: 'Chinmay', email: 'Chinmay@gmail.com'})
//         }else{
//             reject('ERROR:Something went wrong')
//         }
        
//     }, 1000);
// })

// promiseThree.then(function(user){
//     console.log(user);
    
// }).catch(function(error){
//     console.log(error);
    
// }).finally(() => {
//     console.log("resolved or rejected");
    
// })

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(() => {
    let error = true;
    if (!error) {
        resolve("Consumed Successfully");
    }else{
        reject("ERROR: Something went wrong")
    }
    }, 1000);
});
async function consumePromiseFive() {
    try{
        const response = await promiseFive
        console.log(response);
    }catch(error){
        console.log(error);
    }
}

consumePromiseFive()