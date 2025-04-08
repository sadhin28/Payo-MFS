
document.getElementById('add-Money')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const pin = document.getElementById('pinNumber').value;
       
        if ( pin === '1234') {
           const amount=document.getElementById('addAmount').value;
           const blances=document.getElementById('blance').innerText;
           let sum=0;
           sum=amount+8400;
           console.log(sum)
       
        } else {
            alert('Worng Bank acount and Pin')
        }
    })
