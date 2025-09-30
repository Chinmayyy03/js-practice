// function chai() {
//     console.log("DB CONNECTED");
// }
// chai()



(function chai() {
    console.log("DB CONNECTED");  //named IIFE
})();


(function aurcode(){
    console.log("Chinmay");    //unnamed IIFE
})();


( () => {
    console.log("Ghewade");
})();


((name) =>{
    console.log(`DATABASE CONNECTED ${name}`);
    
})("chinmay")