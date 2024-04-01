
// // create a parent class
// class Student{
//     public name: string;
// }

// // interface extended from the above class.
// interface details extends Student{
//     details():void;
// };

// class studentDetails extends Student implements details{
//     details():void{
//         this.name = "bishal";
//         console.log(this.name);
//     }    
// }

// let obj1 = new studentDetails();
// obj1.details();


class Student{
    public id:number;
    public name: string;

    constructor(id:number, name:string){
        this.id=id;
        this.name=name;
    }
}

interface student1 extends Student{
    student1Details():string;
}

interface student2 extends Student{
    student2Details():void;
}

class StudentDetails extends Student implements student2{
    
    constructor(id:number, name:string){
        super(id, name);
    }
    
    student1Details(): string[] {
        this.name="bishal";
        this.id=12;

        let result: string[]=[this.id.toString(), this.name]
        return result;
    };

    student2Details(): void {
        this.name="ram";
        this.id=21;

        console.log(`${this.name} has the id of ${this.id}`);
    }
}

let studentObject = new StudentDetails(0, " ");
studentObject.student2Details();

let student1Object = new StudentDetails(23, "hari hari");
console.log(student1Object.student1Details());