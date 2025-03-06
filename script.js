const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	 let result = []; // This will hold the subarrays
    for (let i = 0; i < arr.length; i += n) {
        // Slice the array into subarrays of size 'num'
        let subArray = arr.slice(i, i + n)
        result.push(subArray);  // Add the subarray to the result
    }
    return result;
}


const n = prompt("Enter n: );
alert(JSON.stringify(divide(arr, n)));
