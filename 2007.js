var findOriginalArray = function(arr) {

    arr.sort((a,b)=>a-b)
    console.log(arr);
    let original=[]
    for (let slow = 0; slow < arr.length; slow++) {
        let fast=slow+1
        if(arr[slow]===arr[fast]/2){
            original.push(arr[slow])
        }else return []
    }
   return original
};



let changed = [1,3,4,2,6,8]

console.log(findOriginalArray(changed));