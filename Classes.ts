class Student{

    constructor(public name: string, public age: number){
        
    }

    greet():void{
        console.log(`${this.name} is ${this.age} years old.`);
    }
}

const student1 = new Student("Bishal", 21);
student1.greet();