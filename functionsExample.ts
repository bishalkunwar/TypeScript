// example of Typescript functions=>
function addTwo(a:number, b:number){
    let result:number = a+b;
    return result;
};

console.log(addTwo(2,3));


// Example of a function with optional and default paramater.
const greeting = (name?:string, time:string="morning")=>{
    const suffix=(name ? ` ${name}` : `....`);
    return `${time}, ${suffix}`;

};

console.log(greeting());
console.log(greeting("bishal", "good evening"));