document.getElementById('Withdraw-Money')
.addEventListener('click',function(event){
    event.preventDefault();
  const cashPin = document.getElementById('cashpin').value;
  const egentNumberss=Addbyid('egent-Number')
  const amount =Addbyid('add-Amount')
  if(isNaN(amount)){
    alert('Withdraw Faild');
    return;
  }
  if(isNaN(egentNumberss)){
    alert('Withdraw Faild');
    return;
  }
    
    if(cashPin === "1234")
        {
       const blances = getTextFieldValueById('blance')
        const blnc=parseFloat(blances);
        const amnt =Addbyid('add-Amount');
        const amounts=parseFloat(amnt);
        if(amounts>blnc){
            alert('You do not have enough money to cash out, Your Current Blance: '+blnc +' TK');
            return;
        }
        const Widthraw=blnc-amounts;
        document.getElementById('blance').innerText=Widthraw;
        
       
        //transaction history
        const egentNumbers=document.getElementById('egent-Number').value;
        const pp =document.createElement('p');
            pp.innerText=`Cash Out: ${amounts} TK to A/C:${egentNumbers}.New Blance: ${Widthraw}`;
            pp.classList.add('bg-yellow-400')
            pp.style.padding='10px';
            pp.style.color='black';
            const date = new Date();
            let currentDatess = date.toLocaleDateString()
            document.getElementById("demo").innerHTML = currentDatess;
            document.getElementById('Transaction-container').appendChild(pp)
           

        }   
            else{
        alert('Withdraw Faild')
    }
})