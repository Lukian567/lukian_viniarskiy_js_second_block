
let tries = 4;
let check = "12345";

while (tries > 0) {
    let pass = prompt('Enter password');
    if (pass === check) {
        alert('Welcome to our site')
        break
    } else {
        tries--

        if (tries > 0) {
            alert(`Wrong, now you have ${tries} attemps`)

        } else {
            alert('Please try again later')

        }
    }

}


let n = +prompt("Enter number");
let factorial = 1;
let i = 1;
while (i <= n) {
  factorial *= i;
  i++;
}
let res = factorial
alert(res);


let g = 1000 
while (g<=9999) {
    g+=3
    console.log(g);
}

let b = 1;
let c = 1; 

while (b<=55) {
    b++
    c+=2
    console.log(c);
}

let d = 90;
while (d > 0) {
    d -= 5
    console.log(d);
}

let e = 1;
let f = 1; 

while (e<=20) {
    e++
    f*=2
    console.log(f);
}


let a = 2;
while (2*a-1<10000) {
    a++
    console.log(2*a-1);
}

let h = -166;

while (h<=99) {
    h = (2*h + 200)
    if(h > -100 && h < 100 ) {
            console.log(h)
            }
}


