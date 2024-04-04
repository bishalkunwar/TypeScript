let orgArr:number[] = [5, 2, 9, 1, 5, 6];

console.log(orgArr);

let ascArr:number[] = orgArr.sort((a,b)=>a-b);
console.log(`ascArr is ${ascArr}`);

let descArr:number[] = orgArr.sort((a,b)=>b-a);4
console.log(`Desc array is ${descArr}`);