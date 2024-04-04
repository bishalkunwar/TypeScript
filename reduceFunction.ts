let arrayDemo:any[] = [11, 23, 45, 45];

let reducedArray:number = arrayDemo.reduce(function(a,b){
    return a*b/2;
});

console.log(reducedArray);