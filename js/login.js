// search:form submit reloading the page

document.getElementById('loginButton')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const phoneNumber = document.getElementById('phone-number').value;
        const pinNumber = document.getElementById('pass').value;
        if (phoneNumber === '1234' && pinNumber === '12') {
            window.location.href = '/home.html'
        } else {
            alert('Worng phone Number Or pin')
        }
    })
