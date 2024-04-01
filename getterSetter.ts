// Example of Getter and Setter.
class Circle{
    public radius:number;

    constructor(radius:number){
        this.radius = radius;
    }

    // getter method for the radious=>
    get radious():number{
        return this.radius;
    }

    // setter method for the radius
    set radious(value:number){
        if(value<=0){
            throw new Error("radius must be a positive number");
        }
        this.radius = value;
    }

    get diameter():number{
        return this.radius*2;
    };

    // set diameter(value:number){

    // }
}


// creating an instance of a circle
const circle1 = new Circle(10);
console.log(circle1.radious);

circle1.radius = 3;
console.log(circle1.radius);
