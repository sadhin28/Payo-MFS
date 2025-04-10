document.getElementById('addMoney').addEventListener('click', function () {

   document.getElementById('Add-money').classList.remove('hidden');
   document.getElementById('cash-out').classList.add('hidden')
   document.getElementById('TransferMoney').classList.add('hidden');

})
document.getElementById('Cashout').addEventListener('click', function () {

   document.getElementById('cash-out').classList.remove('hidden');
   document.getElementById('Add-money').classList.add('hidden')
   document.getElementById('TransferMoney').classList.add('hidden');
})
document.getElementById('transferMoney').addEventListener('click', function () {

   document.getElementById('TransferMoney').classList.remove('hidden');
   document.getElementById('cash-out').classList.add('hidden')
   document.getElementById('Add-money').classList.add('hidden')

})

function showSectionById(id){
   document.getElementById('TransferMoney').classList.add('hidden');
   document.getElementById('cash-out').classList.add('hidden')
   document.getElementById('Add-money').classList.add('hidden')
   document.getElementById(id).classList.remove('hidden')
}
