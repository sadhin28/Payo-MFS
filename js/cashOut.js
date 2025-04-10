document.getElementById('Withdraw-Money')
.addEventListener('click',function(event){
    event.preventDefault();
    const pin=Addbyid('pin-Number');
    if(pin === '12345'){
       const blances = getTextFieldValueById('blance')
        const blnc=parseFloat(blances);
        const amnt =Addbyid('add-Amount');
        const amounts=parseFloat(amnt);
        
        const Widthraw=blnc-amounts;
        document.getElementById('blance').innerText=Widthraw;

    }   
    else{
        alert('Withdraw Faild')
    }
})