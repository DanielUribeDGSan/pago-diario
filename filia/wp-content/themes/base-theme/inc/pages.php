<?php


// CUSTOM PAGES //////////////////////////////////////////////////////////////////////


	add_action('init', function(){


		// VACANTES
		if( ! get_page_by_path('vacantes') ){
			$page = array(
				'post_author' => 1,
				'post_status' => 'publish',
				'post_title'  => 'Vacantes',
				'post_name'   => 'vacantes',
				'post_type'   => 'page'
			);
			wp_insert_post( $page, true );
		}


		// NAUTICA
		if( ! get_page_by_path('nautica') ){
			$page = array(
				'post_author' => 1,
				'post_status' => 'publish',
				'post_title'  => 'Nautica',
				'post_name'   => 'nautica',
				'post_type'   => 'page'
			);
			wp_insert_post( $page, true );
		}


		// NAUTICA
		if( ! get_page_by_path('contacto') ){
			$page = array(
				'post_author' => 1,
				'post_status' => 'publish',
				'post_title'  => 'Contacto',
				'post_name'   => 'contacto',
				'post_type'   => 'page'
			);
			wp_insert_post( $page, true );
		}


	});
