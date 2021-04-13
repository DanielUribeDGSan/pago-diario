let menu = document.querySelector('.burger');
if (menu) {
	menu.addEventListener('click', function(e) {
		e.preventDefault();
		document.querySelector('nav').classList.add('active');
	})
}

let close = document.querySelector('nav .close');
if (close) {
	close.addEventListener('click', function(e) {
		e.preventDefault();
		document.querySelector('nav').classList.remove('active');
		document.querySelector('.contacto').style.display = "none";
	})
}


// //EFECTO DE ALICK AL MENU
// let itemMenu = document.querySelectorAll('header nav a');
// if (itemMenu) {
// 	for (var i = 0; i <= itemMenu.length - 1; i++) {
// 		itemMenu[i].addEventListener('click', function(e) {
// 			$('nav').removeClass();
// 		});
// 	}
// }



//CONTACTO VALIDACION
let btncontacto = document.querySelector(".send-form");
if (btncontacto) {
	btncontacto.addEventListener('click', enviarCorreo);
	document.querySelector('input[name="nombre"]').addEventListener('input', enviarCorreo);
	document.querySelector('input[name="email"]').addEventListener('input', enviarCorreo);
	document.querySelector('textarea').addEventListener('input', enviarCorreo);

}



function enviarCorreo(e) {
	e.preventDefault();

	let name = document.querySelector('#form-contacto input[name="nombre"]'),
		email = document.querySelector('#form-contacto input[name="email"]'),
		message = document.querySelector('#form-contacto textarea[name="mensaje"]'),
		bandera = 0;

		name.style.borderColor = '#1A468D';
		email.style.borderColor = '#1A468D';
		message.style.borderColor = '#1A468D';

	if (name.value == '') {
		name.style.borderColor = 'red';
		bandera = 1;
	}

	if (email.value == '') {
		email.style.borderColor = 'red';
		bandera = 1;
	}

	if ( !validarEmail(email.value) ) {
		email.style.borderColor = 'red';
		bandera = 1;
	}

	if (message.value == '') {
		message.style.borderColor = 'red';
		bandera = 1;
	}

	if (bandera == 1) {
		return false;
	}


	if (e.type == 'click') {

		e.target.disabled = true;

		const data = new FormData(document.getElementById('form-contacto'));
	    let opciones = {
	        method: "POST",
	        credentials: "same-origin",
	        body: data,
	    };

	    fetch("inc/sendEmail.php", opciones)
	        .then(response => response.json())
	        .then(res => {
	        	if (res.message == 'ok') {
	        		swal("Se envio el Mensaje con exito", "success");
	        		e.target.removeAttribute('disabled');
	        		document.getElementById("form-contacto").reset();
	        	}
	        	else if (res.message == 'error_parameters') {
	        		swal("Los datos mandados no son validos o faltan datos", "error");
	        		e.target.removeAttribute('disabled');
	        	}
	        	else if (res.message == 'error_send') {
	        		swal("Ocurrio un problema al enviar el mensaje, intentelo más tarde", "error");
	        		e.target.removeAttribute('disabled');
	        	}
	        	else {
	        		swal("Ocurrio un problema al enviar el mensaje, intentelo más tarde", "error");
	        		e.target.removeAttribute('disabled');
	        	}
	        })
	    .catch(function(error) {
			swal("Ocurrio un problema al enviar el mensaje, intentelo más tarde", "error");
	       	e.target.removeAttribute('disabled');
		});
	}
}




function validarEmail(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}