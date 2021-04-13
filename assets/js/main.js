let slide = document.querySelector('.slide-index');
if (slide) {

	$('.slide').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		arrows: false,
	});
}


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
		//document.querySelector('.contacto').style.display = "none";
	})
}


//EFECTO DE ALICK AL MENU
let itemMenu = document.querySelectorAll('header nav a');
if (itemMenu) {
	for (var i = 0; i <= itemMenu.length - 1; i++) {
		itemMenu[i].addEventListener('click', function(e) {
			$('nav').removeClass();
		});
	}
}



//CLICK PARA ABRIR UN POPUP EMPRESAS
const quepago = document.querySelectorAll('button.empresa, p.empresa');
if (quepago) {
	for (var i = 0; i <= quepago.length - 1; i++) {
		quepago[i].addEventListener('click', function(e) {
			e.preventDefault();
			document.querySelector('.poup-empresas').style.display = 'flex';
		});
	}
}


//CLICK PARA CERRAR UN POPUP EMPRESAS
const poup_empresas = document.querySelector('div.poup-empresas .close');
if (poup_empresas) {
	poup_empresas.addEventListener('click', function(e) {
		document.querySelector('.poup-empresas').style.display = 'none';

		document.querySelector('form[name="form_empresas"]').reset();
	})
}


const poup_video = document.querySelector('div.poup-videoyt .close');
if (poup_video) {
	poup_video.addEventListener('click', function(e) {
		document.querySelector('.poup-videoyt').style.display = 'none';
	})
}


//CLICK PARA ABRIR UN POPUP COLABORADORES
const quepagoColab = document.querySelectorAll('button.empleado');
if (quepagoColab) {
	for (var i = 0; i <= quepagoColab.length - 1; i++) {
		quepagoColab[i].addEventListener('click', function(e) {
			e.preventDefault();
			document.querySelector('.poup-colaboradores').style.display = 'flex';
		});
	}
}

//CLICK PARA CERRAR UN POPUP COLABORADORES
const poup_empleado = document.querySelector('div.poup-colaboradores .close');
if (poup_empleado) {
	poup_empleado.addEventListener('click', function(e) {
		document.querySelector('.poup-colaboradores').style.display = 'none';
		document.querySelector('form[name="form_empleados"]').reset();
	})
}


//VALIDAR FORMULARIO DE EMPLEADO
const form_empleados = document.querySelector('form[name="form_empleados"]');
if (form_empleados) {
	form_empleados.addEventListener('submit', validarFormEmpleados);
	let inputs = document.querySelectorAll('form[name="form_empleados"] input');
	for (var i = 0; i <= inputs.length - 1; i++) {
		inputs[i].addEventListener('input', validarFormEmpleados);
		inputs[i].addEventListener('change', validarFormEmpleados);
	}
}


//VALIDAR FORMULARIO DE EMPRESA
const form_empresas = document.querySelector('form[name="form_empresas"]');
if (form_empresas) {
	form_empresas.addEventListener('submit', validarFormEmpresas);
	let inputs = document.querySelectorAll('form[name="form_empresas"] input');
	for (var i = 0; i <= inputs.length - 1; i++) {
		inputs[i].addEventListener('input', validarFormEmpresas);
		inputs[i].addEventListener('change', validarFormEmpresas);
	}
}


const funcionamiento = document.querySelector('.container-funcionamiento figure img.last');
if (funcionamiento) {
	funcionamiento.addEventListener('click', function(e) {
		e.preventDefault();
		$(".poup-videoyt").css('display', 'flex');
	})
}




function validarFormEmpleados(e) {
	e.preventDefault();

	//SE ELIMINAN LOS RASTROS DE ERRORES
	if (document.querySelector('.has-error')) {
		document.querySelectorAll('.has-error').forEach((item) => {
			item.classList.remove('has-error');
		});
	}
	//SE ELIMINAN LOS RASTROS DE ERRORES\\

	let nombre = document.querySelector('form[name="form_empleados"] input[name="nombre"]');
	let email = document.querySelector('form[name="form_empleados"] input[name="email"]');
	let telefono = document.querySelector('form[name="form_empleados"] input[name="telefono"]');
	let terminos = document.querySelector('form[name="form_empleados"] input[name="terminos"]');

	/* STATUS */
	let error_videos = false;


	if (nombre.value == '') {
		nombre.classList.add('has-error');
		error_videos = true;
	}

	if (email.value == '') {
		email.classList.add('has-error');
		error_videos = true;
	}

	if (!validarEmail(email.value)) {
		email.classList.add('has-error');
		error_videos = true;
	}

	if (telefono.value == '') {
		telefono.classList.add('has-error');
		error_videos = true;
	}

	if (terminos.checked == false) {
		terminos.classList.add('has-error');
		error_videos = true;
	}



	if (error_videos == false) {
		if (e.type == 'submit') {
			document.querySelector('.poup-colaboradores').style.display = 'none';
		}

		return false;
	}

	return false;
}


function validarFormEmpresas(e) {
	e.preventDefault();

	//SE ELIMINAN LOS RASTROS DE ERRORES
	if (document.querySelector('.has-error')) {
		document.querySelectorAll('.has-error').forEach((item) => {
			item.classList.remove('has-error');
		});
	}
	//SE ELIMINAN LOS RASTROS DE ERRORES\\

	let nombre = document.querySelector('form[name="form_empresas"] input[name="nombre"]');
	let email = document.querySelector('form[name="form_empresas"] input[name="email"]');
	let telefono = document.querySelector('form[name="form_empresas"] input[name="telefono"]');
	let puesto = document.querySelector('form[name="form_empresas"] input[name="puesto"]');
	let terminos = document.querySelector('form[name="form_empresas"] input[name="terminos"]');

	/* STATUS */
	let error_videos = false;


	if (nombre.value == '') {
		nombre.classList.add('has-error');
		error_videos = true;
	}

	if (email.value == '') {
		email.classList.add('has-error');
		error_videos = true;
	}

	if (!validarEmail(email.value)) {
		email.classList.add('has-error');
		error_videos = true;
	}

	if (telefono.value == '') {
		telefono.classList.add('has-error');
		error_videos = true;
	}

	if (puesto.value == '') {
		puesto.classList.add('has-error');
		error_videos = true;
	}

	if (terminos.checked == false) {
		terminos.classList.add('has-error');
		error_videos = true;
	}



	if (error_videos == false) {
		if (e.type == 'submit') {
			document.querySelector('.poup-empresas').style.display = 'none';
		}

		return false;
	}
}


function validarEmail(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}
