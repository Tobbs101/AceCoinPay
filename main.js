import Cleave from 'cleave.js'
import './css/style.css'

new Cleave('#input-card', {
    creditCard: true,
    delimiter: '     -     ',
    blocks: [4,4,4,4]
});

new Cleave('#input-cvv', {
    blocks: [3],
    numericOnly: true
});

new Cleave('#input-expiry-month', {
    blocks: [2],
    numericOnly: true
});

new Cleave('#input-expiry-year', {
    blocks: [2],
    numericOnly: true
});

var cardNumber = document.querySelector('#input-card');

cardNumber.addEventListener('keyup', () => {
    var x = cardNumber.value;

    if (x.startsWith('5') == false || x.startsWith('4') == false) {
        document.getElementById('leading-master-icon').style.display='none';
        document.getElementById('leading-visa-icon').style.display='none';
        document.getElementById('leading-verve-icon').style.display='block';
    }

    if (x.startsWith('5') == true) {
        document.getElementById('leading-master-icon').style.display='block';
        document.getElementById('leading-visa-icon').style.display='none';
        document.getElementById('leading-verve-icon').style.display='none';
    }
    else if (x.startsWith('4') == true) {
        document.getElementById('leading-master-icon').style.display='none';
        document.getElementById('leading-visa-icon').style.display='block';
        document.getElementById('leading-verve-icon').style.display='none';
    } 

    

});





/*document.getElementById('day-1').innerText = dt.substring(0,1);
document.getElementById('day-2').innerText = dt.substring(1);
document.getElementById('month-1').innerHTML = myMonth.substring(0,1);
document.getElementById('month-2').innerHTML = myMonth.substring(1);
document.getElementById('year-1').innerHTML = myYear.substring(0,1);
document.getElementById('year-2').innerHTML = myYear.substring(1);*/


window.setInterval(() => {

    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var myDate = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if (myDate < 10) {
      myDate = '0' + myDate;
    }

    if (month < 10) {
      month = month + 1;
      month = '0' + month;
    }

    if (year > 2000) {
      year = year - 2000;
    }

    if (hours < 10) {
      hours = '0' + hours;
    }

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    if (seconds < 10) {
      seconds = '0' + seconds;
    }


    let dt = myDate.toString();
    let myMonth = month.toString();
    let myYear = year.toString();
    let myHours = hours.toString();
    let myMinutes = minutes.toString();
    let mySeconds = seconds.toString();

    document.getElementById('hour-1').innerHTML = myHours.substring(0,1);
    document.getElementById('hour-2').innerHTML = myHours.substring(1);
    document.getElementById('minutes-1').innerHTML = myMinutes.substring(0,1);
    document.getElementById('minutes-2').innerHTML = myMinutes.substring(1);
    document.getElementById('seconds-1').innerHTML = mySeconds.substring(0,1);
    document.getElementById('seconds-2').innerHTML = mySeconds.substring(1);

},1000);



