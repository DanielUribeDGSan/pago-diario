(function($){

	"use strict";

	let slide = document.querySelector('.slide');
	if (slide) {
		$('.slide').slick({
		  dots: false,
		  infinite: true,
		  speed: 500,
		  fade: true,
		  autoplay: true,
		  cssEase: 'linear'
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
			document.querySelector('.contacto').style.display = "none";
		})
	}


	//EFECTO DE ALICK AL MENU
	let itemMenu = document.querySelectorAll('header div nav a');
	if (itemMenu) {
		for (var i = 0; i <= itemMenu.length - 1; i++) {
			itemMenu[i].addEventListener('click', function(e) {
				$('nav').removeClass();
			});
		}
	}


	//UPLADE FILE
	let uploadedFile = document.querySelector('input[name="uploadedFile"]');
	if (uploadedFile) {
		uploadedFile.addEventListener('change', function(e) {
			e.preventDefault();
			var pdrs = document.getElementById('file-upload').files[0].name;
		    document.getElementById('info').innerHTML = pdrs;

		})
	}
	
	//INFO VACANTE
	let info_vacante = document.querySelectorAll('.info-vacante button');
	if (info_vacante) {
		for (var i = 0; i <= info_vacante.length - 1; i++) {
			info_vacante[i].addEventListener('click', function(e) {
				e.preventDefault();
				let slug = e.target.getAttribute('data-slug');
				document.querySelector('input[name="post_id"]').value = slug;
				document.querySelector('.shadow-favorito').style.display = "block";
			});
		}
	}

	//CLOSE
	let close_shadow = document.querySelector('.close-shadow');
	if (close_shadow) {
		close_shadow.addEventListener('click', function(e) {
			e.preventDefault();
			document.querySelector('.shadow-favorito').style.display = "none";
		});
	}


	let formulario_cv = document.querySelector('form[name="formulario_cv"] input[type="submit"]');
	if (formulario_cv) {
		formulario_cv.addEventListener('click', function(e) {
			e.preventDefault();
			e.target.setAttribute("disabled", "");
			document.querySelector("form[name='formulario_cv']").submit();
		});
	}
	
	

})(jQuery);