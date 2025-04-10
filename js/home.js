
document.getElementById('add-Money')
    .addEventListener('click', function (event) {
        event.preventDefault();
        // const bankacount=document.getElementById('bankNumber');
        const pinnum = document.getElementById('pinNumber').value;
        const bankac = document.getElementById('bankNumber').value;
        const amount = Addbyid('addAmount')
        if(isNaN(amount)){
            alert('Faild to add money,Try again')
            return;
        }
        if(isNaN(bankac)){
            alert('Faild to add money,Try again')
            return;
        }
        
        //varify pin number
        if(pinnum === "1234") {
            //    const amount=document.getElementById('addAmount').value;
            const amount = Addbyid('addAmount')
            const blance = getTextFieldValueById('blance')
            const newBlance = blance + amount;
            //step 6: update
            document.getElementById('blance').innerText = newBlance;
            
            const bankac = document.getElementById('bankNumber').value;
            const p =document.createElement('p');
            p.innerText=`Added: ${amount} TK From A/C:${bankac}.New Blance: ${newBlance}`;
            p.classList.add('bg-green-400');
            p.style.padding='10px';
            p.style.color='Black';
            p.style.borderRadius='2px'
            document.getElementById('Transaction-container').appendChild(p);
            const date = new Date();
            let currentDate = date.toLocaleDateString()
document.getElementById("demo").innerHTML = currentDate;
        
        } else {
            alert('Faild to add money,Try again')
        }
    })
   
