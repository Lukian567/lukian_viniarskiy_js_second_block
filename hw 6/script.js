
const fib = (n) => {
    let a = 1;
    let b = 1
    console.log(a);
    console.log(b);
    for (let times = 3; times <= n; times++) {
        let c = a + b;
        console.log(c);
        a = b;
        b = c;
    }
}

fib(10)