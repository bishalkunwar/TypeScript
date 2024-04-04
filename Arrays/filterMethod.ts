let toFilter:number[] = [23, 34, 45, 56, 56, 67, 68];

function isEven(elem:number):any{
    return elem %2==0;
}

function isPositive(elem:number):any{
    return elem >0;
}

let evenFiltered:number[] = toFilter.filter(isEven);
let posFiltered = toFilter.filter(isPositive);


console.log(toFilter);
console.log(toFilter.length);
console.log(evenFiltered);
console.log(posFiltered);
console.log(posFiltered.length);