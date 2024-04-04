let nums1:any[]=[23, 34, 45, 56, 'a'];
let strings1:string[] = ['a', 'b','c'];
let nums2 :number[] = [23, 34, 56];

let newArr = nums1.concat(strings1, nums2);
console.log(newArr);