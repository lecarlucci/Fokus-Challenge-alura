//variables
let timer;
let isRunning = false;
let mode = "work"; // Puede ser "work", "shortBreak" o "longBreak"
const durations = {
  work: { minutes: 25, seconds: 0 },
  shortBreak: { minutes: 5, seconds: 0 },
  longBreak: { minutes: 15, seconds: 0 }
};

function updateDisplay() {
  const displayMinutes = durations[mode].minutes < 10 ? "0" + durations[mode].minutes : durations[mode].minutes;
  const displaySeconds = durations[mode].seconds < 10 ? "0" + durations[mode].seconds : durations[mode].seconds;
  document.getElementById("timer").textContent = `${displayMinutes}:${displaySeconds}`;
}

function startTimer() {
  if (!isRunning) {
    timer = setInterval(function () {
      if (durations[mode].minutes === 0 && durations[mode].seconds === 0) {
        clearInterval(timer);
        isRunning = false;
        alert(`¡Tiempo cumplido! ${getNextModeMessage()}`);
        switchMode();
        document.getElementById("startBtn").textContent = "Iniciar";
        updateDisplay();
        return;
      }

      if (durations[mode].seconds === 0) {
        durations[mode].minutes--;
        durations[mode].seconds = 59;
      } else {
        durations[mode].seconds--;
      }

      updateDisplay();
    }, 1000);
    isRunning = true;
    document.getElementById("startBtn").textContent = "Pausar";
  } else {
    clearInterval(timer);
    isRunning = false;
    document.getElementById("startBtn").textContent = "Continuar";
  }
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  document.getElementById("startBtn").textContent = "Iniciar";
  durations[mode] = { minutes: 25, seconds: 0 };
  updateDisplay();
}

function switchMode(newMode) {
  if (newMode) {
    mode = newMode;
  } else {
    switch (mode) {
      case "work":
        mode = "shortBreak";
        break;
      case "shortBreak":
        mode = "longBreak";
        break;
      case "longBreak":
        mode = "work";
        break;
      default:
        mode = "work";
    }
  }
  updateDisplay();
}

function getNextModeMessage() {
  switch (mode) {
    case "work":
      return "Tómate un descanso corto de 5 minutos.";
    case "shortBreak":
      return "Tómate un descanso largo de 15 minutos.";
    case "longBreak":
      return "Es hora de volver al trabajo. ¡Ánimo!";
    default:
      return "";
  }
}

document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("resetBtn").addEventListener("click", resetTimer);
document.getElementById("workBtn").addEventListener("click", function () { switchMode("work"); });
document.getElementById("shortBreakBtn").addEventListener("click", function () { switchMode("shortBreak"); });
document.getElementById("longBreakBtn").addEventListener("click", function () { switchMode("longBreak"); });