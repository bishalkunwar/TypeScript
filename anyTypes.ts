// any data type is used to prevent the compile time error in the case if the data type of the array or any variable is unknown.

let newArray : any[] = [1, 2, 3, "bishal", "suzan"];
console.log(newArray);

newArray.push("push1");
// newArray.pop();
console.log(newArray);

newArray.splice(1, 0, 34);
console.log(newArray);

newArray.pop();
console.log(newArray);

