// Type Assertion is a technique that informs the compiler about the type of a variable. Type assertion is similar to typecasting but is does not reconstruct code. we can simply use type assertion to specify a value's type and tell the compiler not to deduct it. when we want to change a variable from one type to another such as any to number etc, we use type assertion.

// Example of a type assertion:=>
let str: unknown = "hello world";
console.log(`${str} of type ${typeof(str)}`);

// let len:number = str.length; // this will give the error as str is type unknown so we cannot get the length
let len:number = (str as string).length; 
console.log(len);


// type assertion using <> angle brackets syntax.
let num: any = 69;

let num1 = <Number> num;  // conversion from any to number.
console.log(num1);
console.log(typeof num1);


// below is an example of type assertion with objects
interface studDetails{
    fName:string;
    lName: string;
}

let person = <studDetails>{};

person.fName = "bishal";
person.lName = "kunwar";

console.log(`${person.fName} \t ${person.lName}`);

