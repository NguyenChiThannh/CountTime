const countdownTime = document.querySelector("h1"),
content = document.querySelector(".content"),
selectMenu = document.querySelectorAll("select"),
setTimeBtn = document.querySelector("button");

let alarmTime, isAlarmSet
fiveSecondSound = new Audio("./public/dong-ho-dem-nguoc-5-giay-co-am-thanh.mp3");

for (let i = 20; i > 0; i--) {
    s=i*5
    let option = `<option value="${s}">${s}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 20; i > 0; i--) {
    s=i*5
    let option = `<option value="${s}">${s}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

let currentIntervalId

function startCycle(timePerSet,timeWaiting) {

    function countdown(timer, callback) {
        currentIntervalId = setInterval(() => {
            countdownTime.innerText = --timer;
            if (timer == 4) {
                fiveSecondSound.play();
            }
            if (timer == 0) {
                fiveSecondSound.pause();
                clearInterval(currentIntervalId);
                callback();
            }
        }, 1000);
    }

    function startWaiting() {
        let timeWaitingCountDown = timeWaiting
        countdown(++timeWaitingCountDown, () => {
            startPerSet()
        })
    }

    function startPerSet() {
        let timePerSetCountDown = timePerSet
        countdown(++timePerSetCountDown, () => {
            startWaiting()
        })
    }

    startWaiting()
}

setTimeBtn.onclick = () =>{
    let timePerSet = parseInt(selectMenu[0].value);
    let timeWaiting = parseInt(selectMenu[1].value);
    if (!timePerSet || !timeWaiting) {
        alert("Không được bỏ trống thời gian")
        return;
    }
    clearInterval(currentIntervalId);
    startCycle(timePerSet,timeWaiting); 
}