let a = [3,5,88,99,76,8,4,5,85,63] ; 
function max(a) {
    let max = a[0];
    for (let i = 1; i < a.length; i++) {
        if (a[i] > max) {
            max = a[i];
        }
    }
    return max;
}
max(a) ; 
console.log(`so lon nhat trong array la ${max(a)}`);
