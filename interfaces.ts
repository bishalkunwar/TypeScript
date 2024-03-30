
// Interfaces are the data types that acts as an abstraction of a class.
// Syntax of interfaces:->
// interface InterfaceName{
//     propertyName:Type;
//     methodName()=>Type;
// }


// Example of interface for an array=>

interface ForList{
    [index:number]: string
};

let newArray:ForList = ["interfaces0", "for1", "array2"];
console.log(newArray);


