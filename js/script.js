function insert (num){
    document.form.textview.value = document.form.textview.value + num;

};
function clean (){
    document.form.textview.value = ""
};
function smooth () {
    let i = document.form.textview.value;
    if (i){
        document.form.textview.value = eval(i);
        if (eval(i) > 10000){
            alert('Слишком дорого братан');
        }
    }
};

