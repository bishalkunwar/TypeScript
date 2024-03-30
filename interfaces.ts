
// // Interfaces are the data types that acts as an abstraction of a class.
// // Syntax of interfaces:->
// // interface InterfaceName{
// //     propertyName:Type;
// //     methodName()=>Type;
// // }


// // Example of interface for an array=>

// interface ForList{
//     [index:number]: string
// };

// let newArray:ForList = ["interfaces0", "for1", "array2"];
// console.log(newArray);

// // In the above example, the ForList interface ensures that any object created using it must have an index signature with string values.


// // Properties of interfaces:=>
// // 1. Extending Properties
// interface For_Array{
//     var1: string;
// }

// interface For_List extends For_Array{
//     var2: string;
// }

// // 2. Read only properties
// // making the property as readonly, we cannot modify that after the assaignment.

// interface For_class{
//     readonly name: string;
//     id: number;
// };


// // 3. optional properties
// // Making the property optional using the ? symbol allows flexibility in object structures.

// interface For_Function{
//     (key:string, value?:string):void;
// }

// // Here value property is optional so, when we create the function with this interface it may or may not contain the value parameter.


// 4. Functional interfaces
interface ForFunc{
    (key:string, value?:string):void;
};

function printInfo(key:string, value?:string): void{
    console.log(`${key} for ${value}`);
}

const newFunc: ForFunc = printInfo;
newFunc("Interface example", "function example");
