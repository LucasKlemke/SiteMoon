//Script Cadastro

//Botão cadastrar
const botao = document.getElementById("cadastroBtn");
botao.addEventListener("click", cadastrar);

//Função realizada ao clicar no botão cadastrar
function cadastrar() {
  // Itens de aviso ocultos para completar os campos
  var complete1 = document.getElementById("complete1");
  var complete2 = document.getElementById("complete2");
  var complete3 = document.getElementById("complete3");
  var complete4 = document.getElementById("complete4");
  var complete5 = document.getElementById("complete5");

  //informações de cadastro
  var email = document.getElementById("email").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var checkTerms = document.getElementById("checkTerms").checked;

  console.log(email, username, password, confirmPassword, checkTerms);

  //condicional
  //campos vazios
  if (
    email.value == "" ||
    username.value == "" ||
    confirmPassword == "" ||
    password == ""
  ) {
    complete1.classList.remove("oculto");
    complete2.classList.remove("oculto");
    complete3.classList.remove("oculto");
    complete4.classList.remove("oculto");
    complete5.classList.remove("oculto");

    // senhas diferentes
  } else if (password != confirmPassword) {
    var textoOculto = document.getElementById("passwordHelp");
    var textoOculto2 = document.getElementById("passwordHelp2");
    textoOculto.classList.remove("oculto");
    textoOculto2.classList.remove("oculto");
    complete1.classList.add("oculto");
    complete2.classList.add("oculto");
    complete3.classList.add("oculto");
    complete4.classList.add("oculto");
    complete5.classList.add("oculto");

    // termos não aceitos
  } else if (!checkTerms) {
    complete1.classList.add("oculto");
    complete2.classList.add("oculto");
    complete3.classList.add("oculto");
    complete4.classList.add("oculto");
    complete5.classList.add("oculto");
    var textoOculto = document.getElementById("passwordHelp");
    var textoOculto2 = document.getElementById("passwordHelp2");
    var checkHelp = document.getElementById("checkHelp");
    checkHelp.classList.remove("oculto");
    textoOculto.classList.add("oculto");
    textoOculto2.classList.add("oculto");

    // usuario cadastrado
  } else {
    complete1.classList.add("oculto");
    complete2.classList.add("oculto");
    complete3.classList.add("oculto");
    complete4.classList.add("oculto");
    complete5.classList.add("oculto");
    var textoOculto = document.getElementById("passwordHelp");
    var textoOculto2 = document.getElementById("passwordHelp2");
    textoOculto.classList.add("oculto");
    textoOculto2.classList.add("oculto");
    var checkHelp = document.getElementById("checkHelp");
    checkHelp.classList.add("oculto");
    limparCampos();
    alert("Usuário Cadastrado !");
  }
}

// limpar campos apos cadastro concluido
function limparCampos() {
  document.getElementById("email").value = "";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  document.getElementById("confirmPassword").value = "";
  document.getElementById("checkTerms").checked = false;
}

//   --------------------------------------------------------

const pages = {
  "Counter-Strike: Global-Offensive": 'produtoCounterStrike.html',
  "Tom Clancy's Rainbow Six Siege": 'produtoRainbowSix.html'
};

document.getElementById('searchBar').addEventListener('keypress',function(event) {
  if(event.key == 'Enter'){
    event.preventDefault();

    const searchTerm = this.value.toLowerCase();
    if(pages.hasOwnProperty(searchTerm)) {
      const pageUrl = pages[searchTerm];
      window.location.href = pageUrl;
    }
  }
})