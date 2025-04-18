// Time complexity = O(min(x, y))
function findGCD(x, y) {
    // --------------------------------------------
    // Approach 1 (Start)
    // let gcd:number = 1;
    // for (let i:number = 1; i <= Math.min(x, y); i++) {
    //     if(x%i == 0 && y%i == 0) {
    //         gcd = Math.max(gcd, i);
    //     }
    // }
    // return gcd;
    // Approach 1 (End)
    // --------------------------------------------
    // --------------------------------------------
    // Approach 2 (Start)
    for (var i = Math.min(x, y); i >= 1; i--) {
        if (x % i == 0 && y % i == 0) {
            return i;
        }
    }
    return 1;
    // Approach 2 (End)
    // --------------------------------------------
}
// Time complexity - O(logφ(min(x, y)))
// why φ because we are dividing by x or y. x and y are not constant they are fluctuating again and again
function findGCDUsingEuclidean(x, y) {
    while (x > 0 && y > 0) {
        if (x > y) {
            x = x % y;
        }
        else {
            y = y % x;
        }
    }
    if (x === 0)
        return y;
    else
        return x;
}
var x = 52;
var y = 10;
console.log(findGCD(x, y));
console.log(findGCDUsingEuclidean(x, y));
