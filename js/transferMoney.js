document.getElementById('Send-Money').addEventListener('click',function(event){
    event.preventDefault();
    const pin=Addbyid('Pin-Number')

    if(pin === '12345'){
        const amount=Addbyid('Amount-to-Add')
        const blances=getTextFieldValueById('blance')
        const finalBlance=blances-amount;
        document.getElementById('blance').innerText=finalBlance; 
        alert('Transfer Tk '+ amount + ', Successfully')
    }
    else{
        alert('Faild Transfer Money');
    }
})