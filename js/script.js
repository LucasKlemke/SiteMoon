//Script Cadastro

const botao = document.getElementById('cadastroBtn');
botao.addEventListener('click', cadastrar);

function cadastrar(){
    var email = document.getElementById('email').value
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value
    var confirmPassword = document.getElementById('confirmPassword').value
    var checkTerms = document.getElementById('checkTerms').checked

    console.log(email,username,password,confirmPassword,checkTerms)

    if(email.value == "" || username.value == "" || confirmPassword == "" || password == ""){
        alert("Preencha todos os campos")

    } else if(password != confirmPassword){
        var textoOculto = document.getElementById("passwordHelp");
        var textoOculto2 = document.getElementById("passwordHelp2")
        textoOculto.classList.remove('oculto')
        textoOculto2.classList.remove('oculto')
        
    } else if(!checkTerms){
        var textoOculto = document.getElementById("passwordHelp");
        var textoOculto2 = document.getElementById("passwordHelp2")
       var checkHelp = document.getElementById("checkHelp");
       checkHelp.classList.remove('oculto')
       textoOculto.classList.add('oculto')
    textoOculto2.classList.add('oculto')
    }
      else{
        var textoOculto = document.getElementById("passwordHelp");
        var textoOculto2 = document.getElementById("passwordHelp2")
        textoOculto.classList.add('oculto')
        textoOculto2.classList.add('oculto')
        var checkHelp = document.getElementById("checkHelp");
       checkHelp.classList.add('oculto')
        alert("Usuário Cadastrado !")
        limparCampos();
    }


}

function limparCampos() {
    document.getElementById("email").value = "";
    document.getElementById("username").value = ""
    document.getElementById("password").value = "";
    document.getElementById("confirmPassword").value = "";
    document.getElementById("checkTerms").checked = false;
  }

//   --------------------------------------------------------