document.getElementById('Withdraw-Money')
.addEventListener('click',function(event){
    event.preventDefault();
    const pin=document.getElementById('pin-Number').value;
    if(pin === '12345'){
       const blances = document.getElementById('blance').innerText;  
        const blnc=parseFloat(blances);
        const amnt =document.getElementById('add-Amount').value;
        const amounts=parseFloat(amnt);
        
        const Widthraw=blnc-amounts;
        document.getElementById('blance').innerText=Widthraw;

    }   
    else{
        alert('Withdraw Faild')
    }
})