document.getElementById('Send-Money').addEventListener('click',function(event){
    event.preventDefault();
   const transferpin =document.getElementById('TransferPin').value;

    if(transferpin === "1234"){
        const amount=Addbyid('Amount-to-Add')
        const blances=getTextFieldValueById('blance')
        const finalBlance=blances-amount;
        document.getElementById('blance').innerText=finalBlance; 
         //   add transaction history
         const userAcountNumber=document.getElementById('User-Account-Number').value;
        const ppp =document.createElement('p');
            ppp.innerText=`Transfer: ${amount} TK to A/C:${userAcountNumber}.New Blance: ${finalBlance}`;
            ppp.classList.add('bg-black')
            ppp.style.padding='10px'
            ppp.style.color='white'
            document.getElementById('Transaction-container').appendChild(ppp);

    }
    else{
        alert('Faild Transfer Money');
    }
})