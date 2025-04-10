document.getElementById('Withdraw-Money')
.addEventListener('click',function(event){
    event.preventDefault();
  const cashPin = document.getElementById('cashpin').value;
    
    if(cashPin === "1234")
        {
       const blances = getTextFieldValueById('blance')
        const blnc=parseFloat(blances);
        const amnt =Addbyid('add-Amount');
        const amounts=parseFloat(amnt);
        
        const Widthraw=blnc-amounts;
        document.getElementById('blance').innerText=Widthraw;
        
        
        //transaction history
        const egentNumbers=document.getElementById('egent-Number').value;
        const pp =document.createElement('p');
            pp.innerText=`Cash Out: ${amounts} TK to A/C:${egentNumbers}.New Blance: ${Widthraw}`;
         
            document.getElementById('Transaction-container').appendChild(pp);

        }   
            else{
        alert('Withdraw Faild')
    }
})