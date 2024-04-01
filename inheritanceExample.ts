 // Inheritance helps us to reuse the variables and functions of a parent class .

 class Person{

    constructor(private fName:string, private lName: string){
        // this.fName=fName;
        // this.lName=lName;
    };

    getName():string{
        return `First Name is ${this.fName} and Last Name is ${this.lName}`
    };
 }

 class Student1 extends Person{
    constructor(private id:number, fName:string, lName:string){
        super(fName, lName);
        this.id=id;

    }

    displayInfo():void{
        console.log(`Id is ${this.id}`);
        console.log(super.getName());

    }
 };

 let student1 = new Student1(12, "bishal", "kunwar");
 student1.displayInfo();