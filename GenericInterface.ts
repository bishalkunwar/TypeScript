// This function takes array of any type that you determine while calling the function.

function getInfo<T, V>(name:T, id:V){
    // return ` My Name is ${name} and my id is ${id}`;
    console.log(typeof(name)+` ${name} ${id}` + typeof(id))
};

console.log(getInfo("Bishal", 487));