const cs = document.getElementById("csproduto");
const r6 = document.getElementById("r6produto");

const searchForm = document.getElementById("searchForm");
searchForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var searchInput = document.querySelector("#searchForm .searchInput").value;

  if (searchInput === "Counter-Strike: Global-Offensive") {
    window.location.href = "produtoCounterStrike.html";
  } else if (searchInput === "Tom Clancy's Rainbow Six Siege") {
    window.location.href = "produtoRainbowSix.html";
  }
});

function alerta() {
  alert("PRODUTO DE EXEMPLO (não finalizado) ");
}

function alerta2() {
  alert("NÃO POSSUIMOS MAIS PRODUTOS (botão ilustrativo)");
}

cs.addEventListener("click", function () {
  window.location.href = "produtoCounterStrike.html";
});

r6.addEventListener("click", function () {
  window.location.href = "produtoRainbowSix.html";
});

function mudarPagina1() {
  window.location.href = "produtoCounterStrike.html";
}

function mudarPagina2() {
  window.location.href = "produtoRainbowSix.html";
}
