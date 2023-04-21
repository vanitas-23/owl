qEl=document.querySelector('.q');
pEl=document.querySelector('.p');
owl=document.querySelector('.owl');
owl.onclick = function(){
    qEl.classList.toggle('active');
    pEl.classList.toggle('active');
    owl.classList.toggle('active');
}
