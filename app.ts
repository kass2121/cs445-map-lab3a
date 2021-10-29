function  calculateAverage(array: number[]){
    let sum: number = 0;
    for (let  i = 0; i<array.length; i++) {
        sum += array[i];
        
    }
    let average: number = sum/array.length;
    return average;

}
let arr1: number[]= [17, 9, 4, 82, 15, 36];
let arr2: number[]=  [9, 4, 1, 7, 2, 3, 5, 8, 10, 6]
console.log(`Average : ${calculateAverage(arr1) }`);
console.log(`Average : ${calculateAverage(arr2) }`)