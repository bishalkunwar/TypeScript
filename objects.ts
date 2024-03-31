// example showing the objects example using TS

let employeeDetails = {
    empName: "bishal",
    empSection: "science"
};

console.log(`Emp Name \t Emp Section`);
console.log(`${employeeDetails.empName} \t ${employeeDetails.empSection}`);


function display( obj: {
    empName:String, empSection:String
}): void{
    console.log(`FName is ${obj.empName} LName is ${obj.empSection}`);
};

display(employeeDetails);


// passing objects as function paramaters in TS