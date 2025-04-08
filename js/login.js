//search:form submit reloading the page

document.getElementById('loginButton')
    .addEventListener('click',
        function (event) {
            event.preventDefault();
          const phoneNumber=document.getElementById('phone-number').value;
          
          const pinNumber=document.getElementById('pass').value;
          
          if( phoneNumber === '01707986054' && pinNumber === '1234'){
            console.log('You are loging')
          }
          else{
            alert("Worng Phone number Or pin")
          }
         
            
        }
    )