function Addbyid(id){
   const values = document.getElementById(id).value;
   const value=parseFloat(values)
   return value;
}

function getTextFieldValueById(id){
    const TextValue = document.getElementById(id).innerText;
    const textValue=parseFloat(TextValue);
    return textValue;
}

document.getElementById('loginbutton')
.addEventListener('click',function(){
  
    // window.location.href='/index.html'
    window.location.href='/index.html';
})