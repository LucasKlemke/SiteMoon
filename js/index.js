const cs = document.getElementById('cs');
const r6 = document.getElementById('r6');

function alerta(){
    alert('PRODUTO DE EXEMPLO (não finalizado) ');
}

function alerta2(){
  alert('NÃO POSSUIMOS MAIS PRODUTOS (botão ilustrativo)')
}

cs.addEventListener('click', function(){
  window.location.href = "produtoCounterStrike.html";
})

r6.addEventListener('click', function(){
  window.location.href = "produtoRainbowSix.html";
})


