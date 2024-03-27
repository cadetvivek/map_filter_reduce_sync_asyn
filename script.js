// // MAP 1
// Map:
// The map() method creates a new array by calling a provided 
// function on every element in the original array. It doesn't
//  modify the original array.
// //boubling numbers
// let num = [1,2,3,4,5]
// let double = num.map(function(x){
//     return x*2
// })

// console.log(double) 



//2
// const student =[ {   //map return only array so thats why i sue
//     // array in object
//     name:"vivek",
//     age:23,
//     subject:["hindi","english","Math"],
//     address:"XYZ"


// }]
// let Age = student.map(function(students){
//     return students.subject
// })
// console.log(Age)  //23


// // 3
// let words = ['vivek',"ram",'sheeta','veer']
// const capitals = words.map(function(Cap){
//     return Cap.toUpperCase()
// })
// console.log(capitals) //['VIVEK', 'RAM', 'SHEETA', 'VEER']




// //4  here i ma using arrow function
// let words = ['vivek',"ram",'sheeta','veer']
// const Length = words.map(word=>word.length)
// console.log(Length) // [5, 3, 6, 4]




//Filter

//Filter: Creates a new array with elements that
// satisfy a condition specified by a provided function.
//1

// const numbers = [-2, 5, 10, -8, 3, -6];
// const after_filter = numbers.filter(function(Filter){
//     return Filter>=0
// })
// console.log(after_filter) //[5, 10, 3]



//2
// const employees = [
//     { name: 'Alice', salary: 4500 },
//     { name: 'Bob', salary: 6000 },
//     { name: 'Charlie', salary: 3500 },
//   ];
// const Filter_salary = employees.filter(function(employees){
//     return employees.salary>5000
// })
// console.log(Filter_salary)




// Reduce:
// The reduce() method executes a reducer function on each
//  element of the array, resulting in a single output value.

// Uses in Development:

// Aggregating data from an array into a single value.
// Performing calculations on an array to derive a single result.
// Concatenating or merging multiple arrays into one.

// const nums = [1,2,3,4,5]
// const sum = nums.reduce(function(acc,index){
//     return acc+index
// })
// console.log(sum)

//OR
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// // sum: 15








