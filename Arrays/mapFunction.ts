let mapp:number[] = [2, 23,23,24];
let mapped = mapp.map(function(value,index):void{
    console.log("Key: ", index, "value: ", value);
})

console.log(mapped);