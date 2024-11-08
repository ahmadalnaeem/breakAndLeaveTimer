let leaveTimer;
let breakTimer;
let leaveTime = 5 * 60;
let breakTime;
let breakDuration;
let breakDisplay = document.getElementById("break-timer-display");
let leaveDisplay = document.getElementById("leave-timer-display");
const notificationSound = document.getElementById("notification-sound");

document.getElementById("start-leave-timer").addEventListener("click", function() {
    clearInterval(leaveTimer);
    let timeLeft = leaveTime;

    leaveTimer = setInterval(() => {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        leaveDisplay.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        
        if (timeLeft <= 0) {
            clearInterval(leaveTimer);
            leaveDisplay.textContent = "Time's up!";
            notificationSound.play();
        }

        timeLeft--;
    }, 1000);
});

document.getElementById("reset-leave-timer").addEventListener("click", function() {
    clearInterval(leaveTimer);
    leaveDisplay.textContent = "5:00";
});

document.getElementById("start-break-timer").addEventListener("click", function() {
    breakDuration = parseInt(document.getElementById("break-duration").value) * 60;
    clearInterval(breakTimer);
    let timeLeft = breakDuration;

    breakTimer = setInterval(() => {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        breakDisplay.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        
        if (timeLeft <= 0) {
            clearInterval(breakTimer);
            breakDisplay.textContent = "Break's over!";
            notificationSound.play();
        }

        timeLeft--;
    }, 1000);
});

document.getElementById("reset-break-timer").addEventListener("click", function() {
    clearInterval(breakTimer);
    breakDisplay.textContent = "Select a break time";
});
