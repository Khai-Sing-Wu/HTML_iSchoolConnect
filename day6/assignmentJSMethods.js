let arr1 = [1, 2, 3, 4, 5];
let arr2 = ['a' ,'b' ,'c' ,'d', 'e'];


let arr3 = arr1.concat(arr2);
console.log(arr3);

let arr4 = arr1.join('|');
console.log(arr4);

let popElement = arr1.pop();
console.log(arr1);

arr1.push(6);
console.log(arr1);


arr1.unshift(0);
console.log(arr1);

let first= arr1.shift();
console.log(first);
console.log(arr1);

let sliceArr = arr1.slice(1,3);
console.log(sliceArr);

arr1.splice(0,0,0);
//adds 0 at index 0 and does not replace any element


arr1.reverse();
console.log(arr1);

arr1.sort();
console.log(arr1);

let s1 = arr1.toString();
console.log(s1);

let s2 = arr1.toLocaleString();
console.log(s2);
