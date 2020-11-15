<div class="navbar">
  <div class="navbar__container container">
    <a href="<?php echo get_site_url()?>/" class="logo">
      <img src="<?php echo get_template_directory_uri() ?>/img/logo.svg" alt="logo">
    </a>
    <div class="navbar-right">
      <div class="stroke-a">
        <a class="stroke-link lang" data-router-disabled data-size="0" hreflang="uk" href="/">UA</a>
      </div>
      <div class="burger-wrapper">
        <div class="burger">
          <span class="burger-line line-top"></span>
          <span class="burger-line line-bottom"></span>
        </div>
      </div>
    </div>
  </div>
</div>
<nav class="nav">
  <div class="nav__container container">
    <div class="nav__wrapper">
      <ul class="nav__items">
        <li class="nav__item stroke-a">
            <a class="stroke-link" data-size="30" href="<?php echo get_site_url()?>/" data-transition="simple">
              <span>01</span>
              <!-- {% if lang %}Головна{% else %}Home{% endif %} -->
              Home
            </a>
        </li>
        <?php 
        $counter = 1;
        $args = array(
          'post_type' => 'services',
          'posts_per_page' => 3,
          'order' => 'ASC'
        );    
        $my_query = new WP_Query( $args ); 
        if ( $my_query->have_posts() ) {
          while ( $my_query->have_posts() ) {
            $my_query->the_post();
            $counter++;
        ?>

        <li class="nav__item stroke-a">
          <a class="stroke-link" data-size="30" href="<?php echo get_site_url()?>/services/architecture" data-transition="simple">
            <span>0<?php echo $counter; ?></span>
            <!-- {% if lang %}Архітектура{% else %}Architecture{% endif %} -->
            <?php the_title() ?>
          </a>
        </li>

        <?php             
            }            
          }       
          wp_reset_postdata();             
        ?> 
        <li class="nav__item stroke-a">
          <a class="stroke-link" data-size="30" href="<?php echo get_site_url()?>/portfolio" data-transition="simple">
            <span>05</span>
            Portfolio
            <!-- {% if lang %}Наші роботи{% else %}Portfolio{% endif %} -->
          </a>
        </li>
        <li class="nav__item stroke-a">
          <a class="stroke-link" data-size="30" href="<?php echo get_site_url()?>/about" data-transition="simple">
            <span>06</span>
            <!-- {% if lang %}Про нас{% else %}About{% endif %} -->
            About
          </a>
        </li>
        <li class="nav__item stroke-a">
          <a class="stroke-link" data-size="30" href="<?php echo get_site_url()?>/contacts" data-transition="simple">
            <span>07</span>
            Contacts
            <!-- {% if lang %}Контакти{% else %}Contacts{% endif %} -->
          </a>
        </li>
      </ul>
      <div class="nav__contacts">
        <?php include get_theme_file_path( './logo.php' ); ?>
        <a href="#" class="contact">+38 (067) 629 4813</a>
        <a href="#" class="contact">vulbach2@gmail.com</a>
        <a href="#" class="contact">Ukraine, Kiev<br>st. Parkovo-Syretskaya, 4V</a>
      </div>
    </div>
  </div>
  <div class="nav__rewealer"></div>
  <div class="nav__rewealer-white"></div>
</nav>