
document.getElementById('add-Money')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const bankacount=document.getElementById('bankNumber');
        const pin = document.getElementById('pinNumber').value;
       //varify pin number
        if ( pin === '1234') {
           const amount=document.getElementById('addAmount').value;
           const blance= document.getElementById('blance').innerText;
           
           const amnt=parseFloat(amount);
           const blnc=parseFloat(blance);
           const newBlance= blnc+amnt;
           console.log(newBlance);
            //step 6: update
           document.getElementById('blance').innerText= newBlance;
        } else {
            alert('Faild to add money,Try again')
        }
    })
