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


// const funcionamiento = document.querySelector('.container-funcionamiento figure img.last');
// if (funcionamiento) {
// 	funcionamiento.addEventListener('click', function(e) {
// 		e.preventDefault();
// 		$(".poup-videoyt").css('display', 'flex');
// 	})
// }




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


$(function() {
  $(document).on("scroll", function() {
    var desplazamientoActual = $(document).scrollTop();
    var controlArriba = $("#menu-sticky");
    if (desplazamientoActual > 100) {
      //controlArriba.show();
      $("#menu-sticky").addClass("fade-in-h");
      $("#menu-sticky").addClass("pegajoso");
      $(".logo-svg").empty();
      $(".logo-svg").append(`<svg class="espacio-logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 717.67 179.51"><defs><style>.cls-1{fill:#018fc0;}.cls-2{fill:#184998;}.cls-3{fill:url(#linear-gradient);}</style><linearGradient id="linear-gradient" x1="17.32" y1="133.66" x2="174.37" y2="50.28" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#184998"/><stop offset="0.67" stop-color="#282559"/></linearGradient></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M210.13,137.68V68.22h8.22v8.72h.1q6-9.33,17.57-9.33a22.6,22.6,0,0,1,17.26,7.3q6.79,7.31,6.8,18.36t-6.85,18A23.18,23.18,0,0,1,236,118.21q-11.69,0-17.57-9.12h-.1v28.59Zm24.77-27a16,16,0,0,0,12.13-5,17.37,17.37,0,0,0,4.72-12.47q0-8-4.87-13.08a16.09,16.09,0,0,0-12.08-5.07,15.64,15.64,0,0,0-12.14,5.22,18.6,18.6,0,0,0-4.72,12.93,17,17,0,0,0,4.88,12.57A16.39,16.39,0,0,0,234.9,110.71Z"/><path class="cls-1" d="M293.28,118.21a23.18,23.18,0,0,1-17.21-6.94q-6.85-6.94-6.85-18T276,74.91a22.6,22.6,0,0,1,17.26-7.3,20.69,20.69,0,0,1,10.06,2.49,18.54,18.54,0,0,1,7.2,6.94l.21-.1V68.22H319V117.6h-7.92v-8.92H311Q305.16,118.21,293.28,118.21Zm1.22-7.5a15.83,15.83,0,0,0,11.78-4.87,17.18,17.18,0,0,0,4.77-12.57,18.7,18.7,0,0,0-4.67-12.93,15.23,15.23,0,0,0-11.88-5.22,16.07,16.07,0,0,0-12.08,5.07q-4.87,5.07-4.88,13.08a17.38,17.38,0,0,0,4.73,12.47A16.1,16.1,0,0,0,294.5,110.71Z"/><path class="cls-1" d="M355.63,138.29a38.2,38.2,0,0,1-20.11-5.38l2-7.3a35.64,35.64,0,0,0,17.77,5.18q8,0,12.29-4.11a14.21,14.21,0,0,0,4.26-10.7v-7.91h-.2q-6,8.63-17.16,8.62a23.32,23.32,0,0,1-17.11-6.79q-6.86-6.8-6.85-17.65,0-10.64,6.65-17.64a22.44,22.44,0,0,1,17-7q11.07,0,17.37,8.52h.2V68.22H380V114q0,11.26-6,17.8T355.63,138.29Zm-.11-29.2a15.72,15.72,0,0,0,12-4.87,17.39,17.39,0,0,0,4.56-12.37A16.81,16.81,0,0,0,343.54,80a16.55,16.55,0,0,0-4.67,12.07q0,7.71,4.72,12.37A16.29,16.29,0,0,0,355.52,109.09Z"/><path class="cls-1" d="M417.16,118.21q-11.39,0-18.48-7.2A24.64,24.64,0,0,1,391.57,93a24.83,24.83,0,0,1,7.11-18.1q7.1-7.24,18.48-7.25,11.05,0,18.27,7.1T442.64,93q0,11.16-7.21,18.2T417.16,118.21Zm0-7.5a16.44,16.44,0,0,0,12.13-5A17.38,17.38,0,0,0,434.21,93a17.54,17.54,0,0,0-4.92-12.82,16.33,16.33,0,0,0-12.13-5,16.07,16.07,0,0,0-12.39,5.17A18,18,0,0,0,400,93a17.7,17.7,0,0,0,4.82,12.63A16.21,16.21,0,0,0,417.16,110.71Z"/><path class="cls-2" d="M481.6,118.21a23.46,23.46,0,0,1-17.36-6.94q-6.92-6.94-6.91-18T464.24,75a22.68,22.68,0,0,1,17.26-7.35q11.78,0,17.67,9.43h.1V43h8.22V117.6h-7.92v-9.12h-.1Q493.68,118.22,481.6,118.21Zm1.12-7.5a16.29,16.29,0,0,0,12-4.87,17,17,0,0,0,4.87-12.57,18.55,18.55,0,0,0-4.72-12.93,15.51,15.51,0,0,0-12-5.22,16.27,16.27,0,0,0-12.14,5.07q-4.92,5.07-4.92,13.08a17.37,17.37,0,0,0,4.72,12.47A16.14,16.14,0,0,0,482.72,110.71Z"/><path class="cls-2" d="M531.86,57.47a6.12,6.12,0,0,1-8.53,0,5.85,5.85,0,0,1,0-8.31,6.15,6.15,0,0,1,8.53,0,5.85,5.85,0,0,1,0,8.31Zm-8.43,60.13V68.22h8.23V117.6Z"/><path class="cls-2" d="M568.51,118.21a23.18,23.18,0,0,1-17.21-6.94q-6.85-6.94-6.85-18t6.8-18.36a22.6,22.6,0,0,1,17.26-7.3,20.69,20.69,0,0,1,10.06,2.49,18.54,18.54,0,0,1,7.2,6.94l.21-.1V68.22h8.22V117.6h-7.92v-8.92h-.1Q580.39,118.21,568.51,118.21Zm1.22-7.5a15.83,15.83,0,0,0,11.78-4.87,17.18,17.18,0,0,0,4.77-12.57,18.7,18.7,0,0,0-4.67-12.93,15.23,15.23,0,0,0-11.88-5.22,16.07,16.07,0,0,0-12.08,5.07q-4.87,5.07-4.87,13.08a17.37,17.37,0,0,0,4.72,12.47A16.1,16.1,0,0,0,569.73,110.71Z"/><path class="cls-2" d="M609,117.6V68.22h8.22v9h.2q5.68-9.65,16-9.64a14.85,14.85,0,0,1,2,.11v9.12c-1.63-.13-2.71-.2-3.25-.2a13.68,13.68,0,0,0-11,4.76q-4.06,4.77-4.06,12.37V117.6Z"/><path class="cls-2" d="M653.9,57.47a6.11,6.11,0,0,1-8.52,0,5.85,5.85,0,0,1,0-8.31,6.14,6.14,0,0,1,8.52,0,5.85,5.85,0,0,1,0,8.31Zm-8.42,60.13V68.22h8.22V117.6Z"/><path class="cls-2" d="M692.18,118.21q-11.37,0-18.48-7.2A24.63,24.63,0,0,1,666.6,93a24.82,24.82,0,0,1,7.1-18.1q7.11-7.24,18.48-7.25,11.07,0,18.28,7.1T717.67,93q0,11.16-7.21,18.2T692.18,118.21Zm0-7.5a16.44,16.44,0,0,0,12.14-5A17.38,17.38,0,0,0,709.24,93a17.54,17.54,0,0,0-4.92-12.82,16.34,16.34,0,0,0-12.14-5,16.06,16.06,0,0,0-12.38,5.17A18,18,0,0,0,675,93a17.71,17.71,0,0,0,4.83,12.63A16.19,16.19,0,0,0,692.18,110.71Z"/><path class="cls-3" d="M130.72,78.66c-5-18.33-19.92-31.82-37.59-34C71.4,41.89,53.39,57.19,46.53,73.46,39.24,90.78,45.4,107.23,48,114.19c8.26,22,25.92,32.24,31.32,35.06a65.68,65.68,0,0,0,37.57,7A65,65,0,0,0,156.67,137c14.82-15.32,17.59-38.28,18.24-44-.63,8.18-3.09,30.89-15.29,48.68a88.81,88.81,0,0,1-38.49,31.11,86.3,86.3,0,0,1-36.84,6.6c-36.89-1.72-59.7-27.53-62.44-30.73C17.06,143.09-1.64,120.54.12,88.17c.42-7.81,1.76-27.34,16.57-44.31C18.53,41.76,38,20.25,68.26,21.62c24.72,1.11,47.11,17,58.21,40.91Z"/><path class="cls-1" d="M44.27,101.36c.75-.34,3.8,16,17.13,26a43.17,43.17,0,0,0,37.76,6.41c1.72-.51,19.25-6,27.62-24.13,4.69-10.12,4.24-19.28,3.87-25.26a68.14,68.14,0,0,0-15.84-39C94,21.12,64,22.08,62.14,22.17,30.2,23.74,12.86,48.9,10.2,52.9,4,62.21,2.47,71.65,1.21,77.6,6,44.94,26.14,17,55.69,5.58,86-6.17,116.63,2.27,136.18,15.76A91,91,0,0,1,161.6,42.91a84.56,84.56,0,0,1,12.89,38.46c.57,7.8,2.19,29.77-12.53,49.59-12,16.11-28.09,22-36.1,24.13a65.56,65.56,0,0,1-36.1-.76C69.68,148,59,133.64,55.87,129.26,46.1,115.71,43.57,101.66,44.27,101.36Z"/></g></g></svg>`);
    }
    if (desplazamientoActual < 100) {
      //controlArriba.hide();
      console.log("Estoy en no scroll");
      $("#menu-sticky").addClass("fade-in-h");
      $("#menu-sticky").removeClass("pegajoso");
      $(".logo-svg").empty();
      $(".logo-svg").append(`<svg class="espacio-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 717.73 179.51">
    <defs>
      <style>
        .cls-1 {
          fill: #c6c6c6;
        }

        .cls-2 {
          fill: #fff;
        }
      </style>
    </defs>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <path class="cls-1"
          d="M130.72,78.66c-5-18.33-19.92-31.82-37.59-34C71.4,41.89,53.39,57.19,46.53,73.46,39.24,90.78,45.4,107.23,48,114.19c8.26,22,25.92,32.24,31.32,35.06a65.68,65.68,0,0,0,37.57,7A65,65,0,0,0,156.67,137a67.85,67.85,0,0,0,18.24-39,89.87,89.87,0,0,1-15.29,43.74,88.81,88.81,0,0,1-38.49,31.11,86.3,86.3,0,0,1-36.84,6.6c-36.89-1.72-59.7-27.53-62.44-30.73C17.06,143.09-1.64,120.54.12,88.17c.42-7.81,1.76-27.34,16.57-44.31C18.53,41.76,38,20.25,68.26,21.62c24.72,1.11,47.11,17,58.21,40.91Z" />
        <path class="cls-2"
          d="M44.33,101.36c.75-.34,3.8,16,17.13,26a43.18,43.18,0,0,0,37.76,6.41c1.72-.51,19.26-6,27.63-24.13,4.69-10.12,4.23-19.28,3.86-25.26a68.14,68.14,0,0,0-15.84-39C94.08,21.12,64.08,22.08,62.2,22.17,30.26,23.74,12.92,48.9,10.26,52.9A70.27,70.27,0,0,0,.13,77.22C5,44.56,26.2,17,55.75,5.58c30.32-11.75,60.94-3.31,80.49,10.18a91,91,0,0,1,25.42,27.15,84.44,84.44,0,0,1,12.89,38.46c.58,7.8,2.19,29.77-12.52,49.59-12,16.11-28.1,22-36.1,24.13a65.55,65.55,0,0,1-36.1-.76C69.75,148,59.1,133.64,55.94,129.26,46.16,115.71,43.63,101.66,44.33,101.36Z" />
        <path class="cls-2"
          d="M210.19,136.8V67.34h8.22v8.72h.1q6-9.32,17.57-9.32A22.57,22.57,0,0,1,253.34,74q6.79,7.29,6.8,18.35t-6.85,18a23.18,23.18,0,0,1-17.21,6.94q-11.69,0-17.57-9.12h-.1V136.8Zm24.77-27a16,16,0,0,0,12.14-5,17.42,17.42,0,0,0,4.72-12.47q0-8-4.88-13.08a16.07,16.07,0,0,0-12.08-5.07,15.6,15.6,0,0,0-12.13,5.22A18.55,18.55,0,0,0,218,92.39,17,17,0,0,0,222.88,105,16.41,16.41,0,0,0,235,109.83Z" />
        <path class="cls-2"
          d="M293.35,117.33a23.15,23.15,0,0,1-17.21-6.94q-6.86-6.94-6.86-18T276.08,74a22.57,22.57,0,0,1,17.27-7.3,20.67,20.67,0,0,1,10,2.48,18.53,18.53,0,0,1,7.21,7l.2-.11V67.34H319v49.39h-7.92V107.8H311Q305.22,117.34,293.35,117.33Zm1.21-7.5A15.83,15.83,0,0,0,306.34,105a17.18,17.18,0,0,0,4.77-12.57,18.65,18.65,0,0,0-4.67-12.93,15.23,15.23,0,0,0-11.88-5.22,16.09,16.09,0,0,0-12.08,5.07q-4.87,5.07-4.87,13.08a17.37,17.37,0,0,0,4.72,12.47A16.12,16.12,0,0,0,294.56,109.83Z" />
        <path class="cls-2"
          d="M355.69,137.41A38.29,38.29,0,0,1,335.58,132l2-7.3a35.72,35.72,0,0,0,17.77,5.17q8,0,12.29-4.11a14.19,14.19,0,0,0,4.26-10.7v-7.91h-.2q-6,8.63-17.16,8.62A23.32,23.32,0,0,1,337.46,109q-6.85-6.8-6.85-17.64,0-10.65,6.65-17.65t17-7q11.09,0,17.36,8.51h.2V67.34h8.23v45.73q0,11.27-6,17.8T355.69,137.41Zm-.1-29.2a15.66,15.66,0,0,0,12-4.87A17.38,17.38,0,0,0,372.14,91,16.81,16.81,0,0,0,343.6,79.11a16.53,16.53,0,0,0-4.67,12.06q0,7.71,4.73,12.37A16.26,16.26,0,0,0,355.59,108.21Z" />
        <path class="cls-2"
          d="M417.22,117.33q-11.37,0-18.48-7.2a24.62,24.62,0,0,1-7.11-18A24.79,24.79,0,0,1,398.74,74q7.11-7.26,18.48-7.25,11.09,0,18.27,7.09t7.21,18.25q0,11.16-7.21,18.21T417.22,117.33Zm0-7.5a16.42,16.42,0,0,0,12.13-5,17.39,17.39,0,0,0,4.93-12.78,17.55,17.55,0,0,0-4.93-12.82,16.31,16.31,0,0,0-12.13-5,16.07,16.07,0,0,0-12.39,5.17,18,18,0,0,0-4.77,12.67,17.69,17.69,0,0,0,4.82,12.63A16.21,16.21,0,0,0,417.22,109.83Z" />
        <path class="cls-2"
          d="M481.66,117.33a23.46,23.46,0,0,1-17.36-6.94q-6.9-6.94-6.91-18t6.91-18.3a22.7,22.7,0,0,1,17.26-7.35q11.78,0,17.67,9.43h.1V42.1h8.22v74.63h-7.92V107.6h-.1Q493.74,117.34,481.66,117.33Zm1.12-7.5a16.28,16.28,0,0,0,12-4.87,17,17,0,0,0,4.87-12.57,18.55,18.55,0,0,0-4.72-12.93,15.51,15.51,0,0,0-12-5.22,16.23,16.23,0,0,0-12.13,5.07q-4.94,5.07-4.93,13.08a17.42,17.42,0,0,0,4.72,12.47A16.14,16.14,0,0,0,482.78,109.83Z" />
        <path class="cls-2" d="M531.92,56.6a6.15,6.15,0,0,1-8.53,0,5.89,5.89,0,0,1,0-8.32,6.15,6.15,0,0,1,8.53,0,5.87,5.87,0,0,1,0,8.32Zm-8.43,60.13V67.34h8.23v49.39Z" />
        <path class="cls-2"
          d="M568.58,117.33a23.15,23.15,0,0,1-17.21-6.94q-6.86-6.94-6.86-18T551.31,74a22.57,22.57,0,0,1,17.27-7.3,20.67,20.67,0,0,1,10,2.48,18.53,18.53,0,0,1,7.21,7l.2-.11V67.34h8.22v49.39h-7.92V107.8h-.1Q580.45,117.34,568.58,117.33Zm1.21-7.5A15.83,15.83,0,0,0,581.57,105a17.18,17.18,0,0,0,4.77-12.57,18.65,18.65,0,0,0-4.67-12.93,15.23,15.23,0,0,0-11.88-5.22,16.09,16.09,0,0,0-12.08,5.07q-4.87,5.07-4.87,13.08a17.37,17.37,0,0,0,4.72,12.47A16.12,16.12,0,0,0,569.79,109.83Z" />
        <path class="cls-2" d="M609.09,116.73V67.34h8.22v9h.21q5.68-9.63,16-9.63a15.06,15.06,0,0,1,2,.1V76c-1.63-.13-2.71-.2-3.25-.2a13.68,13.68,0,0,0-11,4.77q-4.05,4.75-4.06,12.37v23.83Z" />
        <path class="cls-2" d="M654,56.6a6.15,6.15,0,0,1-8.53,0,5.87,5.87,0,0,1,0-8.32,6.15,6.15,0,0,1,8.53,0,5.89,5.89,0,0,1,0,8.32Zm-8.43,60.13V67.34h8.22v49.39Z" />
        <path class="cls-2"
          d="M692.24,117.33q-11.37,0-18.47-7.2a24.62,24.62,0,0,1-7.11-18A24.79,24.79,0,0,1,673.77,74q7.1-7.26,18.47-7.25,11.09,0,18.28,7.09t7.21,18.25q0,11.16-7.21,18.21T692.24,117.33Zm0-7.5a16.44,16.44,0,0,0,12.14-5,17.38,17.38,0,0,0,4.92-12.78,17.54,17.54,0,0,0-4.92-12.82,16.34,16.34,0,0,0-12.14-5,16.06,16.06,0,0,0-12.38,5.17,18,18,0,0,0-4.77,12.67,17.69,17.69,0,0,0,4.82,12.63A16.19,16.19,0,0,0,692.24,109.83Z" />
      </g>
    </g>
  </svg>`);

    }
  });
  $("#irarriba a").on("click", function(e) {
    e.preventDefault();
    location.href = "#container-regiter";
  });
});

const count = () => {
  var Cont = {
      val: 0
    },
    NewVal = 250;

  TweenLite.to(Cont, 5, {
    val: NewVal,
    roundProps: "val",
    onUpdate: function() {
      document.getElementById("counter").innerHTML = "+" + Cont.val;
    }
  });
}


$(window).scroll(testScroll);
var viewed = false;

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function testScroll() {
  if (isScrolledIntoView($(".numbers")) && !viewed) {
    viewed = true;
    $('.value').each(function() {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 2000,
        easing: 'swing',
        step: function(now) {
          $(this).text(Math.ceil(now));
        }
      });
    });
  }
}