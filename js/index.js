const cs = document.getElementById('cs');
const r6 = document.getElementById('r6');

function alerta(){
    alert('O jogo não existe');
}

cs.addEventListener('click', function(){
  window.location.href = "produtoCounterStrike.html";
})

r6.addEventListener('click', function(){
  window.location.href = "produtoRainbowSix.html";
})