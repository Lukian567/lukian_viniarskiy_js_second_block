let num = prompt('enter a number from 1-12 and I will show you the number of the quarter and the month in order')
let season1 = 'first'
let season2 = 'second'
let season3 = 'third'
let season4 = 'fourth'


let month1 = 'January'
let month2 = 'February'
let month3 = 'March'
let month4 = 'April'
let month5 = 'May'
let month6 = 'June'
let month7 = 'July'
let month8 = 'August'
let month9 = 'September'
let month10 = 'October'
let month11 = 'November'
let month12 = 'December'

if (num <= 3) {
    alert(season1);
    if (num == 1) {
        alert( month1)
    }  else if (num ==2) {
        alert(month2)
    }else if (num == 3) {
        alert(month3)
    }
    
} else if (num>3 &&  num <=6) {
    alert(season2);
    if (num == 4) {
        alert(month4)
    }  else if (num ==5) {
        alert(month5)
    }else if (num == 6) {
        alert(month6)
    }
}else if (num>6 &&  num <=9) {
    alert(season3);
    if (num == 7) {
        alert(month7)
    }  else if (num ==8) {
        alert(month8)
    }else if (num == 9) {
        alert(month9)
    }
}else if (num>9 &&  num <=12) {
    alert(season4);
    if (num == 10) {
        alert(month10)
    }  else if (num ==11) {
        alert(month11)
    }else if (num == 12) {
        alert(month12)
    }
} else{
    alert('its impossible')
}