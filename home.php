<?php
/*
Template Name: Home
*/
get_header();
?>
<?php get_router('main') ?>
<header class="header">
  <div class="container header__container">
    <div class="header__text-content">
      <h1><?php echo get_field('заголовок_h1'); ?></h1>
      <p class="descriptor"><?php echo get_field('опис'); ?></p>
    </div>
    <div class="header__img">
      <div class="header__img__wrapper img-wrapper">
        <div class="header__img__rewealer"></div>
        <img src="<?php echo get_field('зображення_на_першому_екрані'); ?>" alt="house">
      </div>
    </div>
    <div class="header-img-shadow"></div>
  </div>
</header>
<main>
  <div class="extra-text center">
    <div class="container margin-top center-container">
      <p><?php echo get_field('текст_на_другому_екрані'); ?></p>
    </div>
  </div>
  <!-- if odd > different classes algoritm example: 5 % 3 -->
  <?php 
        $counter = 0;
        $args = array(
          'post_type' => 'services',
          'posts_per_page' => 3
        );    
        $my_query = new WP_Query( $args ); 
        if ( $my_query->have_posts() ) {
          while ( $my_query->have_posts() ) {
            $my_query->the_post();
            $counter++;
        ?>
          <section class="section service">
            <div class="service-item mob-left">
              <div class="container">
                <div class="service-item__content-wrapper">
                  <a href="<?php echo get_the_permalink()?>" class="img-wrapper">
                    <div class="img-rewealer left"></div>
                    <div class="img-overlay"></div>
                    <img src="<?php echo get_field('зображення_на_головній'); ?>" alt="services-1">
                  </a>
                  <div class="service-name left">
                    <span class="service-name__num">0<?php echo $counter;?></span>
                    <div class="stroke-a">
                      <h2 class="stroke-link" data-size="30"><span><a href="<?php echo get_site_url()?>/architecture"><?php the_title(); ?></a></span></h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        <?php             
            }            
          }       
          wp_reset_postdata();             
        ?> 

  <div class="extra-text">
    <div class="container second-line margin-top">
      <?php echo get_field('текст_після_послуг'); ?>
    </div>
  </div>
  <section class="section default">
    <div class="default-item">
      <div class="container last">
        <div class="default-item__content-wrapper">
          <div class="img-wrapper">
            <div class="img-rewealer left"></div>
            <img src="<?php echo get_template_directory_uri() ?>/img/handmade.jpg" alt="handmade">
          </div>
          <div class="default-text left">
            <h2 class="def-h2"><?php echo get_field('заголовок_про_підхід'); ?></h2>
            <p><?php echo get_field('текст_про_підхід'); ?></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
<?php include get_theme_file_path( './partials/components/footer.php' ); ?>
<?php
get_footer();
?>
