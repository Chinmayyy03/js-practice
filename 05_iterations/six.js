// const myArr = [1,2,3,4,5,6,7,8,9,10]

// const display = myArr.forEach(function(value){
//     console.log(value);
//     // return value
// })
// console.log(display);




 const myArr2 = [16,2,3,4,5,6,7,8,9,10]

// const mynum = myArr2.filter(function (num) {
//     return num > 4
//     })
//     console.log(mynum);




// myArr2.forEach((num) => {
//     if (num>4) {
//         myArr2.push(num)
//     }
// })
// console.log(myArr2);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userbook = books.filter((bk) => bk.genre==='History')
//   console.log(userbook);

  userbook = books.filter(function(bk) {
   return bk.edition >= 2010 || bk.publish >= 2000
  } )
  console.log(userbook);
  
