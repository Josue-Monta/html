function onClickSubmitButton(){
    let inputValue = document.getElementById('inputText').value;
    if(inputValue>0){
        alert('El numero es mayor a cero');
    }
    if(inputValue<0){
        alert('El numero es menor a cero');
    }
    if(inputValue=0){
        alert('Intente otra vez');
    }
}
    