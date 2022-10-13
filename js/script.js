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
  let num1 = '';
  let num2 = '';
  let sign = '';
  let finish = false;

  const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '.'];
  const action = ['+', '-', 'x', '÷'];

const display = document.querySelector('.display');

document.querySelector('.keyboard').onclick = (event) => {
    if(!event.target.classList.contains('key')) return;
    if(event.target.classList.contains('clear')) return;
    display.textContent = '';
    const key = event.target.textContent;
    if (digit.includes(key)){
        if (num2 === '' && sign ===''){
        num1 += key;
        display.textContent = num1;
        }
        else if (num1!=='' && num2!=='' && finish){
            num2 = key;
            finish = false;
            display.textContent = num2;
        }
        else {
            num2 += key;
            display.textContent = num2;
        }
        return;
    }
    if (action.includes(key)){
        sign = key;
        display.textContent = sign;
        return;
    }
    if (key ==='='){
        if (num2 ==='') num2 = num1;
        switch (sign){
        case "+":
            num1 = (+num1) + (+num2);
            break;
        case "-":
            num1 = num1 - num2;
            break;
        case "x":
            num1 = num1 * num2;
            break;
        case "÷":
            if (num2 === '0'){

                display.textContent = 'Дурной совсем что ли 0 на 0 делить ай ай!';
                display.style.fontSize = '20px';
                display.style.fontWeight = '700';
                num1 = '';
                num2 = '';
                sign = '';
                return;
            }
            num1 = num1 / num2;
            break;
        }
    }
    finish = true;
    display.textContent = num1;
}
function clean (){
    num1 = '';
    num2 = '';
    sign = '';
    finish = false;
    display.textContent = 0;
    display.style.fontSize = '48px';
    display.style.fontWeight = '400';
};


