function clockTimer(){
  let date = new Date();
  
  let time = [date.getHours(),date.getMinutes(),date.getSeconds()]; 
// |[0] = Hours| |[1] = Minutes| |[2] = Seconds|
  let dayOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  let days = date.getDay();
  
  if(time[0] < 10){time[0] = "0"+ time[0];}
  if(time[1] < 10){time[1] = "0"+ time[1];}
  if(time[2] < 10){time[2] = "0"+ time[2];}
  
  let currentTime = [time[0],time[1],time[2]].join(':');
  let clock = document.getElementById("clock");
  let day = document.getElementById("dayOfWeek");
  
  clock.innerHTML = currentTime;
  day.innerHTML = dayOfWeek[days];
  setTimeout("clockTimer()", 1000);
};

let display = document.querySelector('.display');

function insert (num){
    if (display.textContent == 0){
        display.textContent = "";
        
        display.textContent = display.textContent + num;
    } else{
    display.textContent = display.textContent + num;
    }

};
function signs (num){
    if (display.textContent != 0){
        display.textContent = display.textContent + num;    
    } 
};
function clean (){
    display.textContent = "0"
};
function smooth () {
    let i = display.textContent;
    if (i){
        display.textContent = eval(i);
        if (eval(i) > 10000){
            alert('Слишком дорого братан');
        }
    }
};
