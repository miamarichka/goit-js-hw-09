let intervalId = null;
const INTERVAL_DELAY = 1000;


const startBtn = document.querySelector('button[data-start]')
const stopBtn = document.querySelector('button[data-stop]')


startBtn.addEventListener('click', onStartClick)
stopBtn.addEventListener('click', onStopClick )


function onStartClick(event){
startBtn.setAttribute('disabled', true);
 if(stopBtn.hasAttribute('disabled')){
  stopBtn.removeAttribute('disabled')
 };
intervalId = setInterval(changeBodyColor, INTERVAL_DELAY)
};


function onStopClick(event){
startBtn.removeAttribute('disabled')
stopBtn.setAttribute('disabled', true)
clearInterval(intervalId)
};


function changeBodyColor (){
  document.body.style.backgroundColor = getRandomHexColor()
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

