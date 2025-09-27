const myArr = [0,1,2,3,4,5,6,7,8] //Orignal array
// console.log(myArr[4]);

// myArr.push(5)
// myArr.push(6)
// myArr.pop()
// myArr.shift()
// myArr.unshift(1)
// console.log(myArr);
console.log(myArr);    //Printing orignal array

const myArr2 = myArr.slice(1,4)
console.log(myArr2);   //using slice only perticuler elements are displayed except range (last element)

const myArr3 = myArr.splice(1,4)
console.log(myArr3);   //Using Splice elements are displayed till range

console.log(myArr);   //elements will display leaving splice


