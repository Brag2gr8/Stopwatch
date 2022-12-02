
let [seconds,minutes,hours] = [0,0,0];
let timerRef = document.querySelector('.timerDisplay');
let int = null;

const hourEl = document.querySelector(".hours");
const minuteEl = document.querySelector(".minutes");
const secondEl = document.querySelector(".seconds");

const borderEl = document.querySelector(".wrapper");


document.getElementById("start").addEventListener("click", () => {
    borderEl.style.borderColor = "greenyellow";
    if(int!==null){
        clearInterval(int);
    };
    int = setInterval(displayTimer,1000);
});
    
}

document.getElementById('pause').addEventListener('click', () => {
    if (secondEl.innerHTML > 0) {
        clearInterval(int);
        setTimeout(() => borderEl.style.borderColor = "orange", 500)
    } else { alert("NO ACTIVE TIME")}
});

document.getElementById("stop").addEventListener("click", () => {
    if (secondEl.innerHTML > 0) {
        document.getElementById("time-count").textContent = `${hourEl.textContent} 
        : ${minuteEl.textContent} : ${secondEl.textContent} `
        clearInterval(int);
        [seconds,minutes,hours] = [0,0,0,0];
        hourEl.textContent = '00';
        minuteEl.textContent = '00';
        secondEl.textContent = '00';
        setTimeout(() => borderEl.style.borderColor = "red", 500);
    } else { alert("NO ACTIVE TIME")}
})


function displayTimer(){
    seconds+=1;
    
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }  
     
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    
    hourEl.innerHTML = h;
    minuteEl.innerHTML = m;
    secondEl.innerHTML = s;
}
