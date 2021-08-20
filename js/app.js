function getPin(){
    let randomNumbers = Math.round(Math.random()*10000)
    const string = randomNumbers + ''
    if(string.length == 4){
        return randomNumbers
    }
    else{
        return getPin()
    }
}
function generatePin(){
    const pin = getPin()
   document.getElementById('display-pin').value = pin;

    
}

document.getElementById('key-pad').addEventListener('click',function(event){
    const keyValue = event.target.innerText;
    const displayValue = document.getElementById('typed-numbers')
    if(isNaN(keyValue)){
        if(keyValue == 'C'){
            displayValue.value = ''
        }
    }
    else{
    const previouDisplayValue = displayValue.value;
    const newDisplayValue = previouDisplayValue + keyValue;
    displayValue.value = newDisplayValue;
    }

})

function pinVerify(){
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    if(pin == typedNumbers){
        const messageSuccess = document.getElementById('notify-success')
        messageSuccess.style.display = 'block' 

    }
    else{
        const messageFaild = document.getElementById('notify-fail')
        messageFaild.style.display = 'block' 
    }
    pin.value = ''

}