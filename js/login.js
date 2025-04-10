// search:form submit reloading the page

document.getElementById('loginButton')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const phoneNumber = Addbyid('phone-number');
        const pinNumber =  Addbyid('pass');
        if (phoneNumber === '1234' && pinNumber === '12') {
            window.location.href = '/home.html'
        } else {
            alert('Worng phone Number Or pin')
        }
    })
