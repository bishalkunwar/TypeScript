// class Student{

//     constructor(public name: string, public age: number){
        
//     }

//     greet():void{
//         console.log(`${this.name} is ${this.age} years old.`);
//     }
// }

// const student1 = new Student("Bishal", 21);
// student1.greet();


// Concept of enum in typescript.
// TypeScript enum allow us to define or declare a set of named constants. i.e. a collection of related values which would either be in the form of a string or a number or any other data type.

enum FriendsName{
    Bishal, shreejan, alishan, swift
};

console.log(FriendsName);
// enum gives the output in both forward and reverse wap mapping , intended to make versitile to access the index and values whatever user wants.

// Example of heterogoneus enum.
enum fruitsName{
    apple = "Apple",
    Banana = 12,
    papaya
};

console.log(fruitsName);