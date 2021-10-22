let email = document.querySelector('#emailLogin');
let passowrd = document.querySelector('#field-password');
const button = document.getElementById('btn-login');

button.addEventListener('click', (event) => {

    event.preventDefault();

    // Verificação!
    
    // verifyItens()

    // Busca do Local Storage 

    const emailsCadastrados = JSON.parse(localStorage.getItem('cadastro'));
    console.log(emailsCadastrados.valueOf())
    // const splitCadastros = emailsCadastrados.split();


    // if(email == emailsCadastrados[2]) {
    
    // }
})


function verifyItens() {
    if(email == "") {
        alert('Coloque um e-mail!')
    }
    if(passowrd == "") {
        alert('Coloque uma senha!')
    }
}













function showPassword(){
    let eye = document.getElementById("eye");
    let eyeslash = document.getElementById("eye-slash");
    let field = document.getElementById("field-password");

    if(eye.style.display === 'none'){
        eye.style.display = 'block';
        eyeslash.style.display = 'none';
        field.type = 'text';
    }else{
        eye.style.display = 'none';
        eyeslash.style.display = 'block';
        field.type = 'password';
    }
}
