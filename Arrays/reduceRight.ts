let toReduce: number[] = [11, 89, 23, 7, 98];

let val = toReduce.reduceRight(function(a: number, b: number): number {
    return a - b;
});

console.log(val); 