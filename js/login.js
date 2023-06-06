//Script Cadastro

//Botão cadastrar
const botao = document.getElementById("loginBtn");
botao.addEventListener("click", logar);

//Função realizada ao clicar no botão cadastrar
function logar() {
  // Itens de aviso ocultos para completar os campos
  var complete1 = document.getElementById("complete1");
  var complete2 = document.getElementById("complete2");
  var complete3 = document.getElementById('complete3');
  var complete4 = document.getElementById('complete4');
  //   --------------------------------------------

  //informações de cadastro
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  //   --------------------------------------------

  console.log(email,password);

//   condicional
//   campos vazios
  if (
    email == "" ||
    password == ""
  ) {
    complete1.classList.remove("oculto");
    complete2.classList.remove("oculto");
    complete3.classList.remove("oculto");
    complete4.classList.add("oculto");

  } else {
    complete3.classList.add("oculto");
    complete1.classList.remove("oculto");
    complete2.classList.remove("oculto");
    complete4.classList.remove("oculto");
  }
}

// limpar campos apos cadastro concluido
// function limparCampos() {
//   document.getElementById("email").value = "";
//   document.getElementById("password").value = "";
// }

//   --------------------------------------------------------