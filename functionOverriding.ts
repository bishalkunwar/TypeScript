class Animal{
    makeSound():string{
        return `Animal makes sound`;
    }
}

class Cat extends Animal{
    makeSound(): string {
        return `Cat meow meow`;
    }
}

class Dog extends Animal{
    makeSound(): string {
        return `Dog Barks`
    }
}

const animal1 = new Animal();
console.log(animal1.makeSound());


const animal2 = new Dog();
console.log(animal2.makeSound());


const animal3 = new Cat();
console.log(animal3.makeSound());