let start = 'let s start the test (write with the small letter)';
alert(start);
let mark = 0;
let question1 = prompt('2 + 2 = ?');
let question2 = prompt('what is the capital of Great Britian?');
let question3 = prompt('how many continets in the world?(only number)');
let question4 = prompt(' Which country has the largest population in the world?');
let question5 = prompt('Which planet is nearest to the Earth? ');
let question6 = prompt('The United States consists of how many states? (only number)');
let question7 = prompt('Which is the hottest continent on Earth?');
let question8 = prompt(' Which country is called the Land of Rising Sun?');
let question9 = prompt('Which European country shares its border with the most neighbors?');
let question10 = prompt('Which country is the second biggest in the world?');

let answer1 = '4';
let answer2 = 'london';
let answer3 = '7';
let answer4 = 'china';
let answer5 = 'venus';
let answer6 = '50';
let answer7 = 'africa';
let answer8 = 'japan';
let answer9 = 'germany';
let answer10 = 'canada';

if (question1 == answer1) {
    mark++
}

if (question2 == answer2) {
    mark++
}

if (question3 == answer3) {
    mark++
}

if (question4 == answer4) {
    mark++
}

if (question5 == answer5) {
    mark++
}

if (question6 == answer6) {
    mark++
}

if (question7 == answer7) {
    mark++
}

if (question8 == answer8) {
    mark++
}

if (question9 == answer9) {
    mark++
}

if (question10 == answer10) {
    mark++
}

alert( mark )

if (mark <= 3) {
    alert('you are bad')
} else if  (mark >4 && mark <= 7) {
    alert('you are ok')
} else if (mark >=8) {
    alert(' you are good')
}

