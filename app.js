function calculateAverage(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    var average = sum / array.length;
    return average;
}
var arr1 = [17, 9, 4, 82, 15, 36];
var arr2 = [9, 4, 1, 7, 2, 3, 5, 8, 10, 6];
console.log("Average : " + calculateAverage(arr1));
console.log("Average : " + calculateAverage(arr2));
