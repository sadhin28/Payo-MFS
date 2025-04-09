document.getElementById('addMoney').addEventListener('click',function(){
    
   document.getElementById('Add-money').classList.remove('hidden');
   document.getElementById('cash-out').classList.add('hidden')
   
})
document.getElementById('Cashout').addEventListener('click',function(){
    
   document.getElementById('cash-out').classList.remove('hidden');
   document.getElementById('Add-money').classList.add('hidden')
   
})



// function cashO(){
//     let x=document.getElementById('cash-out');
//     if(x.style.display === "none"){
//         x.style.display='block';
//     }else{
//         x.style.display='none';
//     }
// }