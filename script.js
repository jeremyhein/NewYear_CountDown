const day = document.getElementById('days');
const hour = document.getElementById('hours');
const minute = document.getElementById('minutes');
const second = document.getElementById('seconds');
const countdown = document.getElementById('countdown');

const year = document.getElementById('year');
const loading = document.getElementById('loading');



const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 15} 00:00:00`);
year.innerText = currentYear + 1;

function updateCountdown(){
    const currentTime = new Date();
    const diff = newYearTime - currentTime;
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60 ) % 24;
    const m = Math.floor(diff / 1000 / 60 ) % 60;
    const s = Math.floor(diff / 1000) % 60;
    
    day.innerHTML = d;
    hour.innerHTML = h < 10 ? '0'+ h : h;
    minute.innerHTML = m < 10 ? '0' + m : m;
    second.innerHTML = s < 10 ? '0' + s : s;
}

setTimeout(() => {
    loading.remove();
    countdown.style.display = 'flex';


} , 1000);

setInterval(updateCountdown, 1000);
