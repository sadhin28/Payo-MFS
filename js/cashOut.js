document.getElementById('Withdraw-Money')
.addEventListener('click',function(event){
    event.preventDefault();
    const pin=Addbyid('pin-Number');
    if(pin === '1234'){
       const blances = getTextFieldValueById('blance')
        const blnc=parseFloat(blances);
        const amnt =Addbyid('add-Amount');
        const amounts=parseFloat(amnt);
        
        const Widthraw=blnc-amounts;
        document.getElementById('blance').innerText=Widthraw;
        const agentnumber=Addbyid('egent-Number')
        const p =document.createElement('p');
            p.innerText=`Cashout: ${amounts} TK Send To A/C:${agentnumber}.New Blance: ${Widthraw}`;
    }   
    else{
        alert('Withdraw Faild')
    }
})