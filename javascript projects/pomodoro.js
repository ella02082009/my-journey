document.addEventListener('DOMContentLoaded', () => {
   const minutesDisplay = document.getElementById('minutes');
   const secondsDisplay = document.getElementById('seconds');
   const startButton = document.getElementById('start');
   const resetButton = document.getElementById('reset');
   const pauseButton = document.getElementById('pause');
   const pomodoroModeButton= document.getElementById('pomodoroMode');
   const shortBreakModeButton = document.getElementById('shortBreakMode');
   const longBreakModeButton = document.getElementById('longBreakMode');

   let timer;
   let totalSeconds;
   let isPaused = true;
   let currentMode = 'pomodoro'; // pomodoro, shortBreak, longBreak

   const modes = {
       pomodoro: 25 * 60,
       shortBreak: 5 * 60,
       longBreak: 15 * 60
   };

   function updateDisplay() {
       const mins = Math.floor(totalSeconds / 60);
       const secs = totalSeconds % 60;
       minutesDisplay.textContent = String(mins).padStart(2, '0');
       secondsDisplay.textContent = String(secs).padStart(2, '0');
   }

   function updateModeButtons() {
       pomodoroModeButton.classList.remove('active');
       shortBreakModeButton.classList.remove('active');
       longBreakModeButton.classList.remove('active');
       if (currentMode === 'pomodoro') {
           pomodoroModeButton.classList.add('active');
       } else if (currentMode === 'shortBreak') {
           shortBreakModeButton.classList.add('active');
       } else if (currentMode === 'longBreak') {
           longBreakModeButton.classList.add('active');
       }
   }

   function startTimer() {
       if (!isPaused) return; // prevent multiple timers
       isPaused = false;

       timer = setInterval(() => {
           if (totalSeconds <= 0) {
               clearInterval(timer);
               alert(`${currentMode === 'pomodoro' ? 'Pomodoro' : 'Break'} finished!`);
               isPaused = true;
               return;
           }
           totalSeconds--;
           updateDisplay();
       }, 1000); // update every second
   }

   function pauseTimer() {
       clearInterval(timer);
       isPaused = true;
   }

   function resetTimer() {
       clearInterval(timer);
       isPaused = true;
       setMode(currentMode);
   }

   // Set mode function
   function setMode(mode) {
       currentMode = mode;
       totalSeconds = modes[currentMode];
       isPaused = true;
       clearInterval(timer); // clear any running timer
       updateDisplay();
       updateModeButtons();
   }

   // Event Listeners
   startButton.addEventListener('click', startTimer);
   pauseButton.addEventListener('click', pauseTimer);
   resetButton.addEventListener('click', resetTimer);
   pomodoroModeButton.addEventListener('click', () => setMode('pomodoro'));
   shortBreakModeButton.addEventListener('click', () => setMode('shortBreak'));
   longBreakModeButton.addEventListener('click', () => setMode('longBreak'));

   // Initialize default mode
   setMode('pomodoro');
});
