document.getElementById('addMoney').addEventListener('click', function () {
   showSectionById('Add-money')
  

})
document.getElementById('Cashout').addEventListener('click', function () {
   showSectionById('cash-out')
  
})
document.getElementById('transferMoney').addEventListener('click', function () {
   showSectionById('TransferMoney')
  
  
})



function showSectionById(id){
   document.getElementById('TransferMoney').classList.add('hidden');
   document.getElementById('cash-out').classList.add('hidden')
   document.getElementById('Add-money').classList.add('hidden')
   document.getElementById(id).classList.remove('hidden')
   
}
