// EXERCICE 1 - PUSH SANS PUSH 

let fruits = ['Apple', 'Orange', 'Banana']
fruits = [... fruits, 'Raspberry']
console.log(fruits);


// EXERCICE 2 - UNSHIFT SANS UNSHIFT

let fruitss = ['Apple', 'Orange', 'Banana']

fruitss = ['Raspberry', ... fruitss]
console.log(fruitss);


// EXERCICE 3 - ARRAY CONCATENATION

const arr1 = ['A', 'B', 'C']
const arr2 = ['X', 'Y', 'Z']

const arr3 = [...arr1,...arr2]
console.log(arr3)


// EXERCICE 4 - OBJECTS

const user = {
    age: 10,
    eyes: "vert",
    legs: 2,
    arms: 2,
    hair: "long",
    caracterstique: "gras du bide",
    nose: "petit nez",
    ears: "grandes oreilles",
    glasses: true,
    sosie: "sarkozy"
}

const bobby = {
    firstName: "bobby",
    ...user
}
console.log(bobby)


// EXERCICE 5 - FOREACH

const numbers = [1, 2, 3, 4, 5, 6]

numbers.forEach(function(number){
    console.log(number)
})


// EXERCICE 6 - FILTER

const numberss = [1, 2, 3, 4, 5, 6]

let even = numberss.filter(function(numEven){
    return numEven % 2 === 0
})
console.log(even)


// EXERCICE 7 - MAP

const numbersss = [1, 2, 3, 4, 5, 6]

let squaredNum = numbersss.map(function(num){
    return num * num
})
console.log(squaredNum)