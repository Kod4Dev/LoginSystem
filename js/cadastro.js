// Sistema de Cadastro
let email = document.querySelector("#emailCadastro");
let passwordOne = document.querySelector("#passwordOne");
let passwordTwo = document.querySelector("#passwordTwo");
let error = document.querySelector("#error");
let button = document.getElementById('btn-login');
let senha = ""

button.addEventListener('click', (event) => {
    event.preventDefault();

    verificacao()
    verifyPass()

    let emailVerificado = email.value


    const storage = JSON.parse(localStorage.getItem('cadastro')) || [];
    const dados = {
        emailVerificado,
        senha
    }

    const storageAtt = [... storage, dados];

    localStorage.setItem("cadastro", JSON.stringify(storageAtt));

    clean()
    alert('Usuário cadastrado com sucesso')

})


function verificacao() {

    if(email.value == "") {
        error.innerHTML = "Nenhum e-mail adicionado"
    }

    if(passwordOne.value == "") {
        error.innerHTML = "Nenhuma senha foi escrita!"
    }

    if(passwordTwo.value == "") {
        error.innerHTML = "Escreva novamente a sua senha!"
    }

}

function verifyPass() {

    if(passwordOne.value == passwordTwo.value) {
        senha = passwordOne.value
    } else {
        error.innerHTML = "As senhas não coincidem"
    }


}

function clean() {
    email.value = ""
    passwordOne.value = ""
    passwordTwo.value = ""
}