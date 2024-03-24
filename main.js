function login(){
    let digito1 = document.getElementById("digito1").value;
    let digito2 = document.getElementById("digito2").value;
    let digito3 = document.getElementById("digito3").value;
    let digito4 = document.getElementById("digito4").value;

    let pin = digito1 + digito2 + digito3 + digito4;

    if(pin === "1234"){
        Swal.fire({
            icon: 'success',
            title: 'Acceso completado',
            text: 'Bienvenido Ash Ketchum',
            position: 'center'
        }).then((result) => {
            window.location.href = "/vistas/principal.html";
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Pin inválido',
            text: 'Por favor, ingresa un PIN válido',
            position: 'center'
        })
    }
}