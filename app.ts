function  calculateAverage(array: number[]){
    let sum: number = 0;
    for (let  i = 0; i<array.length; i++) {
        sum += array[i];
        
    }
    let average: number = sum/array.length;
    return average;

}