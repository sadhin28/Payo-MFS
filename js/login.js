// search:form submit reloading the page

document.getElementById('loginButton')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const phoneNumber = document.getElementById('phone-number').value;
        const pinNumber = document.getElementById('pass').value;
        if(phoneNumber === "1234" && pinNumber === "1234")
        {
             window.location.href= '/home.html'
        }else{
            alert('Invalid Number and Pin')
        }
    })
