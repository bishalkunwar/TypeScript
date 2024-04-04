let orgArr:number[] = [5, 2, 9, 1, 5, 6];

console.log(orgArr);

let ascArr:number[] = orgArr.sort((a,b)=>a-b);
console.log(`ascArr is ${ascArr}`);

let descArr:number[] = orgArr.sort((a,b)=>b-a);4
console.log(`Desc array is ${descArr}`);


// sorting example of 2-d array
let matrix: number[][] = [
    [3, 7, 2],
    [1, 5, 4],
    [9, 8, 6]
];

console.log("Original Matrix:");
console.log(matrix);

matrix.sort((a, b) => a[0] - b[0]);
console.log("Sorted Matrix:");
console.log(matrix);

let allSorted:number[][] = matrix.map(innerArr=>innerArr.slice().sort((a,b)=>a-b));
console.log("all sorted matrix is");
console.log(allSorted);


// Note:- Here, map is used to iterate over each inner array. slice() is used to create a shallow copy of each inner array before sorting it to avoid modifying the original matrix. Then, sort is applied to each inner array to sort them individually. Finally, the sorted matrix is printed as well as the new sorted array allSorted.