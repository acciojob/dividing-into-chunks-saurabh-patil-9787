const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	 let result = [];
    let len = arr.length;
    let subarraySize = Math.ceil(len / n);  // This determines the size of each subarray (rounded up)

    for (let i = 0; i < len; i += subarraySize) {
        result.push(arr.slice(i, i + subarraySize));  // Slice the array into subarrays and push to result
    }

    return result;
}


const n = prompt("Enter n:")
alert(JSON.stringify(divide(arr, n)));
