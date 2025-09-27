const heroMarvel = ['thor','ironman','spiderman']

const heroDc = ['batman','flash','superman']

// heroMarvel.push(heroDc)
// console.log(heroMarvel)

// const newheros = heroMarvel.concat(heroDc)
// console.log(newheros);

const new2heros = [...heroMarvel,...heroDc]
// console.log(new2heros)

const another_array = [1,2,3,[4,5,[6,7,8]],[9,10]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
