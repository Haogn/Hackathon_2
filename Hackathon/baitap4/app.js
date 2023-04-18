let arr = [3, 25, 38, 49, 12];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] < arr[j]) {
      let a = arr[i];
      arr[i] = arr[j];
      arr[j] = a;
    }
  }
}
console.log(arr);