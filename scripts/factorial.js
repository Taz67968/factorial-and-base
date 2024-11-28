function factorial(b) {
    let results = 1
    for (let index = 2; index <= b; index++) {
        results *= index;
    }
    alert(results);
}
console.log(factorial(10));
