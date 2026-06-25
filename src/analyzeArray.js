function analyzeArray(arr) {
  let sum = 0;
  let average = 0;
  const length = arr.length;
  let value = arr[0];
  let min = arr[0];
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    average = sum / length;
  }

  for (let i = 0; i < arr.length; i++) {
    if (max <= arr[i]) {
      max = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (min >= arr[i]) {
      min = arr[i];
    }
  }

  return `{length: ${length}, sum: ${sum}, average: ${average}, max: ${max}, min: ${min}}, `;
}

const object = analyzeArray([1, 8, 3, 4, 2, 6]);
const object2 = analyzeArray([50, 49, 6, 77, 88, 23, 20]);

console.log(object2);

// object == {
//    average: 4,
//    min: 1,
//    max: 8,
//    length: 6
// };
