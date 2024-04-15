// Q107
// this is a function check if a num is divisible by both 2 and 3
function check(num) {
    if (num % 2 === 0 && num % 3 === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(check(12));
console.log(check(7));
