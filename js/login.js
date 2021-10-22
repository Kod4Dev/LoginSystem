let email = document.querySelector('#emailLogin');
let passowrd = document.querySelector('#field-password');
const button = document.getElementById('btn-login');

button.addEventListener('click', (event) => {

    event.preventDefault();

    if(email.value == "") {

        alert('Coloque um e-mail!'); 
        return; 

    } else if(passowrd.value == "") {

        alert('Coloque uma senha!')
        return;

    }

    const cadastros = JSON.parse(localStorage.getItem('cadastro'));

    if(email.value == cadastros[0]['emailVerificado']) {
        if(passowrd.value == cadastros[0]['senha']) {

            alert('Usuário autenticado com sucesso');

        }
    }

})


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
