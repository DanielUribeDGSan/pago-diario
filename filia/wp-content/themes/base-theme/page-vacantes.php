	<?php get_header(); ?>
	<!-- Insert content here -->

	<?php

		if (isset($_SESSION['success'])) {
			echo "<script> swal('C.V. enviado!', 'Gracias por postularte', 'success'); </script>";
			unset($_SESSION['success']);
		}

		if (isset($_SESSION['error'])) {
			echo '<script> swal("Algo salio mal!", "'.$_SESSION['error'].'", "error"); </script>';
			unset($_SESSION['error']);
		}
	?>

	<section class="slide-info-diviciones">
		<div class="container flex">
			<div class="divicion-slider">
				<h1>VACANTES</h1>
				<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntu</p>
			</div>
			<div class="slide">
				<figure>
					<img src="<?php bloginfo('template_url'); ?>/images/vacantes.png">
				</figure>
			</div>
		</div>
	</section>


	<section class="vacantes">
		<div class="container">
			<h2> DIVISIÓN </h2>
			<span class="arrow-down"></span>


			<div class="container-vacantes">

				<?php
					$postid = "";
					$args = array( 'post_type' => 'vacante', 'post_status' => 'publish', 'posts_per_page' => 8, 'orderby' => 'title', 'order' => 'ASC', ); $loop = new WP_Query( $args ); 
					while ( $loop->have_posts() ) : $loop->the_post(); 
						$imgDestacada = "<?php bloginfo('template_url'); ?>/images/vacante-lop.png";
						if ( has_post_thumbnail() ) {
							$thumbID 		= get_post_thumbnail_id( $post->ID );
							$imgDestacada 	= wp_get_attachment_image_src( $thumbID, 'thumbnail' )[0];
						}
					?>

						<div class="box-vacante">
							<div class="background-vacante" style="background-image: url(<?= $imgDestacada ?>);"></div>
							<div class="info-vacante">
								<h3> <?= the_title() ?> </h3>
								<?= the_excerpt() ?>
								<button data-slug="<?= $post->ID ?>"> POSTULAR </button>
							</div>
						</div>

				<?php
					endwhile; 
					wp_reset_postdata();
				?>

			</div>

		</div>

	</section>

	<!-- exito -->
    <div class="shadow-favorito">
        <div class="f-shadow">
            <div class="s-favorito">
                <div class="close-shadow"></div> <!-- /close-shadow -->
                <form action="?" method="POST" name="formulario_cv" enctype="multipart/form-data">
					<input type="hidden" name="action" value="registroformulario">
					<input type="hidden" name="post_id" value="">
					<h3> Sube tu C.V. actualizado en pdf o word</h3>
					<p> peso maximo del archivo 5mb </p>
					<div>
				    	<label for="file-upload" class="subir">
						    <i class="fas fa-cloud-upload-alt"></i> Subir archivo
						</label>
						<input id="file-upload" name="uploadedFile" type="file" style='display: none;'/>
						<div id="info"></div>
				    </div>
					<input type="submit" value="Enviar">
				</form>
            </div> <!-- /s-favorito -->
        </div> <!-- /f-favorito -->
    </div> <!-- /shadow-favorito -->
	
</body>
</html>

	<?php /*get_sidebar();*/ ?>
	<?php get_footer(); ?>