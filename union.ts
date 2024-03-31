// in Typescript, union to data types enables the data to be defined to one or two or multiple different data types of any except that it will give the error at compilation as compiler error:

let bishalData : (number|string|boolean)[] = [1, 2,3, "Bishal", "suzan", true];
// let bishalDataCopy : (number|string)[] = [1, 2,3, "Bishal", "suzan", true, 1.3];

// console.log(bishalDataCopy); // this will give the compile error boolen value cannot be assaigned as there is not the boolen data type defined.
console.log(bishalData); 
console.log(typeof(bishalData)); // this gives the data type as an object
console.log(typeof(bishalData[2])); // this auto identifies the data type as a number as there is numeric value at that index.
console.log(typeof(bishalData[3])); // this auto identifies the data type as a string as there is string value at that index.