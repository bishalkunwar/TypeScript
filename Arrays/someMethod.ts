 
function ispositive(elem) 
{  
   return elem > 0; 
}  
 
var arr = [ 11, 89, 23, 7, 98 ];  
    
var value = arr.some(ispositive);  
console.log( value ); 
