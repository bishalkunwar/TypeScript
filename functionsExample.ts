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


// // Function overloading example in typescript.
// function addData(data1: string, data2: string):string{
//     return data1+data2;
// }

// function addData(data1:number, data2:number):number{
//     return data1+data2;
// }

function addData(data1:any, data2:any){
    return data1+data2;
}

console.log(addData(12, 23));
console.log(addData("bishal", "kunwar"));


// function overloading example within the class 
class LetsAdd{
    public displayData(data1:any):any{
        if(typeof(data1===Number)){
            return data1.toString().length;
        };

        if(typeof(data1 === String)){
            return data1.length;
        }
    };
};

let obj1 = new LetsAdd();
console.log(obj1.displayData(23));

let obj2 = new LetsAdd();
console.log(obj2.displayData("hello world"));


// function overloading example with the unknown number of arguement passing to the function=>
function greet(...args:any[]):string{
    let result = " ";
    for(let x = 0; x<=args.length-1; x++){
        result += args[x].toString()+" ";
        
    };

    return result;
};

console.log(greet("hello"));
console.log(greet("bishal", "kunwar", 23));

