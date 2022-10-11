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
