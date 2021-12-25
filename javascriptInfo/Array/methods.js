// push 
// pop
// shift
// unshift
// slice ==> returns new slice of array
// splice ==> returns the deleted array, adds elements inplace | splice(index, delCount, ...spread)
// concat ==> merges n (arrays or items)
// forEach ==> iterates a function over an array | forEach(f(x, i, arr))
// indexOf ==> returns index if found else -1
// lastIndexOf
// includes
// find
// filter => returns the filtered array | arr.filter(f(x))
// every
// some
// toString

/* ARRAY TRANSFORM FUNCTIONS */
//map
//reduce ==>  | reduce(f(x), init)
//reduceRight
//sort ==> | arr.sort(f(x)?)
// split ==> splits delimeter separated elements into array | str.split(deli, arr_len)
//join ==> joins array elements into a string | arr.join(', ')
//Array.isArray

const fruits = ['apple', 'banana', 'grapes', 'oranges']

const newFruits = fruits.slice()

console.log("fruits === newFruits", fruits === newFruits)

const spliceFruits = fruits.splice(2, 4, 0, 'mango', 3,4)

console.log("spliced food", spliceFruits)
console.log("leftover fruits", fruits)

const vegetables = ['potato', 'tomato', 'lady finger']

const vegeFruits = fruits.concat(vegetables)

console.log("fruits + vegetables", vegeFruits)

console.log("Apple in fruits", fruits.indexOf('apple'))

console.log("find element", fruits.find( x => x == 'banana' || x == 'oranges'))

const phrase = "A, man, is, loved, under, a,  condition, that, he, provides, something"

console.log("phrase array", phrase.split(', '))

console.log("Is array?", Array.isArray(fruits))

const matrix = [
    [1, 2 ,3],
    [3, 6, 9],
    [9, 12, 15]
]

console.log("array to string", matrix.toString())