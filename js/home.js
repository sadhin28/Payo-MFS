
document.getElementById('add-Money')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const pin = document.getElementById('pinNumber').value;
       
        if ( pin === '1234') {
           const amount=document.getElementById('addAmount').value;
            console.log(amount)
       
        } else {
            alert('Worng Bank acount and Pin')
        }
    })
