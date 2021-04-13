<?php get_header(); ?>
<!-- Insert content here -->

	<section class="contacto">
		<div class="container flex">
			<div class="info-contacto">
				<h1>CONTACTO</h1>
				<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntu</p>
			</div>
			<div class="logo-contacto">
				<figure>
					<img src="<?php bloginfo('template_url'); ?>/images/logo_1.png">
				</figure>
			</div>
		</div>
	</section>

	<section class="ubicacion-contacto">
		<div class="container flex">
			<div id="map">
				<div class="address">
					<h3>Address</h3>
					<p>1600 Amphitheatre Parkway Mountain View,<br> CA 94043</p>
				</div>
				<div class="talk">
					<h3>Lets Talk</h3>
					<p>+1 650-253-0000</p>
				</div>
				<div class="support">
					<h3>General Support</h3>
					<p>hello@basis.com</p>
				</div>
			</div>
			<div class="formulario">
				<h3>CONTACTO</h3>
				<form>
					<input type="text" name="first_name" placeholder="First Name">
					<input type="text" name="last_name" placeholder="Last Name">
					<input type="text" name="telephone" placeholder="Telephone">
					<input type="text" name="email" placeholder="E-mail">
					<textarea placeholder="Text your message here.."></textarea>
					<button>ENVIAR</button>
					<p></p>
				</form>
			</div>
		</div>
	</section>
</body>
</html>

	<?php /*get_sidebar();*/ ?>
	<?php get_footer(); ?>