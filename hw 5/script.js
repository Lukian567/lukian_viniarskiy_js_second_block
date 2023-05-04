
let num = +prompt('enter number from 1 to 12')


switch (num) {
    case 12:
    case 1:
    case 2:
        alert('winter');
        break;
    case 3:
    case 4:
    case 5:

        alert('spring');
        break;
    case 6:
    case 7:
    case 8:
        alert('summer');
        break;
    case 9:
    case 10:
    case 11:
        alert('autumn');
        break;
    default:
        alert('it is imposible');
        break;
}

let n = prompt('enter number');

function primeNumber(n) {


    if (n == 1 || n == 0) {
        alert(`Number ${n} isn't prime`)

    } else {
        for (let check = 2; check < n; check++) {
            if (n % 2 === 0) {

                alert(`Number ${n} isn't prime`)
                break
            } else if (n % 2 !== 0) {

                alert(`Number ${n} is prime`)
                break
            }
        }
    }


}

primeNumber(n)

function max() {
    let m = arguments[0];
    for (let len = 0; len < arguments.length; len++) {
        if (arguments[len] > m) {
            m = arguments[len]
        }
        console.log(arguments[len]);
    }
    console.log('max number:', m);
    alert(`max number: ${m}`);
}


max(34, -200, 300, 434, 1000, 456, 4000)