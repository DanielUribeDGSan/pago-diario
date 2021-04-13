<?php


// CUSTOM POST TYPES /////////////////////////////////////////////////////////////////


	add_action('init', function(){


		// Vacantes
		$labels = array(
			'name'          => 'Vacantes',
			'singular_name' => 'Vacante',
			'add_new'       => 'Nueva Vacante',
			'add_new_item'  => 'Nueva Vacante',
			'edit_item'     => 'Editar Vacante',
			'new_item'      => 'Nueva Vacante',
			'all_items'     => 'Todas',
			'view_item'     => 'Ver Vacante',
			'search_items'  => 'Buscar Vacante',
			'not_found'     => 'No se encontro',
			'menu_name'     => 'Vacantes'
		);

		$args = array(
			'labels'             => $labels,
			'public'             => true,
			'publicly_queryable' => true,
			'show_ui'            => true,
			'show_in_menu'       => true,
			'query_var'          => true,
			'rewrite'            => array( 'slug' => 'vacantes' ),
			'capability_type'    => 'post',
			'has_archive'        => true,
			'hierarchical'       => false,
			'menu_position'      => 6,
			'taxonomies'         => array( 'category' ),
			'supports'           => array( 'title', 'editor', 'thumbnail' )
		);
		register_post_type( 'vacante', $args );

	});