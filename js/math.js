function Addbyid(id){
   const values = document.getElementById(id).value;
    return values;
}

function getTextFieldValueById(id){
    const TextValue = document.getElementById(id).innerText;
    const textValue=parseFloat(TextValue);
    return textValue;
}