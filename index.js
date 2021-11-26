
console.log("Hello World");
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let a;
let time;
let fullDate;

setInterval(() => {
    a = new Date();
    time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds()
    let month = months[a.getMonth()];
    let day = days[a.getDay()];
    fullDate = day + ', ' + month + ' ' + a.getDate() + ', ' + a.getFullYear()
    document.getElementById('times').innerHTML = time;
    document.getElementById('dayq').innerHTML = fullDate;
}, 1000);