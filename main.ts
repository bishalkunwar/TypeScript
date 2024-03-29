class Main{
    f_name:string="bishal";
    l_name:string="kunwar";

    constructor(fname:string, lname:string){
        this.f_name = fname;
        this.l_name = lname;
    };

    getFullName(): string{
        var fullName:string=this.f_name+" "+this.l_name;
        return fullName;
    }
};


let friend1 = new Main("Ram", "Shyam");
console.log(friend1.getFullName());


// // well i have a qstn, why do we need constructor?:->
// // if you want to initialize the object with certain values immediately upon creation, you would typically use a constructor. The constructor allows you to pass arguments when creating an instance of the class, and those arguments can be used to initialize the object's properties.

// class Main {
//     f_name: string;
//     l_name: string;

//     constructor(fname: string, lname: string) {
//         this.f_name = fname;
//         this.l_name = lname;
//     }

//     getName(): string {
//         return this.f_name + " " + this.l_name;
//     }
// }

// let obj = new Main("John", "Doe"); // Create an object with initial values
// console.log(obj.getName()); // Output: John Doe
