<?php
get_header();
?>
<?php get_router('services') ?>

<header class="header services-header">
  <div class="container">
    <div class="services-header__text-content">
      <span class="moc-text"><?php echo get_field('текст_2_на_першому_екрані'); ?></span>
      <h1 class="services-h1"><?php the_title(); ?></h1>
      <p class="services-descriptor"><?php echo get_field('текст_1_на_першому_екрані'); ?></p>
    </div>
  </div>
  <div class="services-header-imgs">
    <?php

      if( have_rows('зображення_на_першому_екрані') ):
        while( have_rows('зображення_на_першому_екрані') ): the_row();

          $header_image_1 = get_sub_field('зображення_1_на_першому_екрані');
          $header_image_2 = get_sub_field('зображення_2_на_першому_екрані');
          $header_image_3 = get_sub_field('зображення_3_на_першому_екрані');
          $header_image_4 = get_sub_field('зображення_4_на_першому_екрані');

  ?>
    <div class="header-image first">
      <div class="img-wrapper">
        <div class="img-rewealer top"></div>
        <img src="<?php echo $header_image_1; ?>" alt="header-1">
      </div>
    </div>
    <div class="header-image second">
      <div class="img-wrapper">
        <div class="img-rewealer top"></div>
        <img src="<?php echo $header_image_2; ?>" alt="header-2">
      </div>
    </div>
    <div class="header-image third">
      <div class="img-wrapper">
        <div class="img-rewealer top"></div>
        <img src="<?php echo $header_image_3; ?>" alt="header-3">
      </div>
    </div>
    <div class="header-image fourth">
      <div class="img-wrapper fourth">
        <div class="img-rewealer top"></div>
        <img src="<?php echo $header_image_4; ?>" alt="header-4">
      </div>
    </div>
    <?php endwhile; ?>
    <?php endif; ?>
  </div>
</header>
<main>
  <section class="section default">
    <div class="default-item">
      <div class="container">
        <div class="default-item__content-wrapper">
          <div class="img-wrapper">
            <div class="img-rewealer left"></div>
            <img src="<?php echo get_field('другий_екран_зображення'); ?>" alt="architecture-1">
          </div>
          <div class="default-text left">
            <h2 class="def-h2"><?php echo get_field('другий_екран_заголовок'); ?></h2>
            <p><?php echo get_field('другий_екран_текст'); ?></p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="extra-text">
    <div class="container second-line margin-top">
      <p><?php echo get_field('третій_екран_текст'); ?></p>
    </div>
  </div>
  <div class="section">
    <div class="container center-container img-container">
      <div class="img-wrapper">
        <div class="img-rewealer left"></div>
        <img src="<?php echo get_field('третій_екран_зображення'); ?>" alt="architecture-2">
      </div>
    </div>
  </div>
  <section class="section default">
    <div class="default-item">
      <div class="container">
        <div class="default-item__content-wrapper reverse">
          <div class="img-wrapper">
            <div class="img-rewealer right"></div>
            <img src="<?php echo get_field('четвертий_екран_зображення'); ?>" alt="architecture-3">
          </div>
          <div class="default-text right">
            <h2 class="def-h2"><?php echo get_field('четвертий_екран_заголовок'); ?></h2>
            <p><?php echo get_field('четвертий_екран_текст'); ?></p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section default">
    <div class="default-item">
      <div class="container">
        <div class="default-item__content-wrapper">
          <div class="img-wrapper">
            <div class="img-rewealer left"></div>
            <img src="<?php echo get_field('пятий_екран_зображення'); ?>" alt="architecture-4">
          </div>
          <div class="default-text left">
            <h2 class="def-h2 big-width"><?php echo get_field('пятий_екран_заголовок'); ?></h2>
            <p><?php echo get_field('пятий_екран_текст'); ?></p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section center-content">
    <div class="container center-container second-line both">
      <h2 class="def-h2"><?php echo get_field('шостий_екран_заголовок'); ?></h2>
      <p><?php echo get_field('шостий_екран_текст'); ?></p>
    </div>
  </section>
  <section class="section slider-section">
    <div class="container last">
      <?php 
      if ( get_post_meta( get_the_ID(), 's_slide_img', false ) ){ 
        $image_array = get_post_meta( get_the_ID(), 's_slide_img', false ); 
    ?>
      <div class="slideshow">
        <?php
      }
        if ( $image_array ) {

          foreach ( $image_array as $image ) {
                      
            $thumbimg = wp_get_attachment_image( $image['ID'], 'thumbnail');
            $fullimg = pods_image_url( $image['ID'], 'large');
    ?>
        <div class="slide">
          <div class="slide__wrap">
            <div class="slide__img" style="background-image: url(<?php  echo $fullimg ?>);"></div>
            <div class="slide__title-wrap">
            </div>
          </div>
        </div>
        <?php
        }
          }
      ?>
      </div>
      <nav class="boxnav">
        <div class="boxnav__item boxnav__item--prev">
          <svg class="icon icon--caret">
            <path
              d="M0.292892 8.7071C-0.0976334 8.31657 -0.0976333 7.68341 0.292893 7.29289L6.65685 0.928925C7.04738 0.5384 7.68054 0.5384 8.07107 0.928925C8.46159 1.31945 8.46159 1.95261 8.07107 2.34314L2.41422 7.99999L8.07107 13.6568C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.7071ZM94 9L1 8.99999L1 6.99999L94 7L94 9Z"
              fill="#292B33" fill-opacity="0.7" />
          </svg>
        </div>
        <div class="boxnav__item boxnav__item--next">
          <svg class="icon icon--caret-rot">
            <path
              d="M0.292892 8.7071C-0.0976334 8.31657 -0.0976333 7.68341 0.292893 7.29289L6.65685 0.928925C7.04738 0.5384 7.68054 0.5384 8.07107 0.928925C8.46159 1.31945 8.46159 1.95261 8.07107 2.34314L2.41422 7.99999L8.07107 13.6568C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.7071ZM94 9L1 8.99999L1 6.99999L94 7L94 9Z"
              fill="#292B33" fill-opacity="0.7" />
          </svg>
        </div>
      </nav>
      
      <div class="extra-text">
        <p><?php echo get_field('текст_під_слайдером'); ?></p>
      </div>
      <div class="slider-section__bg">
        <div class="bg"></div>
      </div>
    </div>
  </section>
</main>

<?php include get_theme_file_path( './partials/components/footer.php' ); ?>
<?php
get_footer();
?>