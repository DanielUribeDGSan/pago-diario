<!doctype html>
	<head>
		<meta charset="utf-8">
		<title><?php print_title(); ?></title>
		<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
		<link rel="preconnect" href="https://fonts.gstatic.com">
		<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600&display=swap" rel="stylesheet">
		<link rel="shortcut icon" href="<?php echo THEMEPATH; ?>images/favicon.ico">
		<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
		<meta name="description" content="<?php bloginfo('description'); ?>">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta http-equiv="cleartype" content="on">
		<!--[if IE]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
		<?php wp_head(); ?>
	</head>

	<body>
		<header>
			<div class="container flex">
				<a href="/">
					<figure>
						<img src="<?php bloginfo('template_url'); ?>/images/logo.png" alt="logo">
					</figure>
				</a>
				<div class="burger">
					<span class="bar"></span>
					<span class="bar"></span>
					<span class="bar"></span>
				</div>
				<nav>
					<span class="close fa fa-times fa-4x"></span>
					<a href="<?php echo site_url('/'); ?>"> ACERCA DE </a>
					<a href="<?php echo site_url('#diviciones'); ?>"> DIVISIONES </a>
					<a href="<?php echo site_url('#ventures'); ?>"> VENTURES </a>
					<a href="<?php echo site_url('vacantes'); ?>"> VACANTES </a>
					<a href="<?php echo site_url('contacto'); ?>"> CONTACTO </a>
				</nav>
			</div>
		</header>
