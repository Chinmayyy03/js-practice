// const myArr = [1,2,3]
// const ans = myArr.reduce(function (acc,current){
//     console.log(`acc : ${acc} and current ${current}`);
    
//     return acc + current
    
// },0)
// console.log(ans);




// const myArr2 = [1,2,3]
// const ans2 = myArr2.reduce((acc,current) => acc + current,0)
//     // console.log(`acc : ${acc} and current ${current}`);
    
// console.log(ans2);



const myArr3 = [
    {
        c_name : 'java',
        c_fees : 2999
    },
    {
        c_name : 'javascript',
        c_fees : 12999
    }
]

const ans3 = myArr3.reduce((acc,curr) => acc + curr.c_fees,0)
console.log(ans3);
