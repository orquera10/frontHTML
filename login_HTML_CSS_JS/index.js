const signinBtn = document.querySelector('.signinBtn');
const signupBtn = document.querySelector('.signupBtn');
const formBx = document.querySelector('.formBx');
const body = document.querySelector('body');

signupBtn.onclick = function(){
    formBx.classList.add('active');
    body.classList.add('active');
}

signinBtn.onclick = function(){
    formBx.classList.remove('active');
    body.classList.remove('active');
}

const form = document.getElementById('loginForm');
let accesstoken;
form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form);
    const obj = {};
    data.forEach((value, key) => obj[key] = value);
    fetch('http://localhost:8081/api/users/login', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
    .then(data => {
        accesstoken = data.data.accessToken;
        // Continuar con el procesamiento del accessToken
    })
    .catch(error => {
      console.error('Error:', error);
    });
    
    
    
    // then(result => {
    //     console.log(result);
    //     console.log(result.data.accessToken);
    //     if (result.status === 200) {
    //         console.log("Iniciaste sesion");
    //         // window.location.replace('/products');
    //     } else{
    //         Swal.fire({
    //             icon: 'error',
    //             timer: 3000,
    //             title: "¡Error!",
    //             text: "Email o Password incorrectos",
    //         });
    //         setTimeout(()=>{window.location.replace('/login');},2000)
    //     }
    // });
})
