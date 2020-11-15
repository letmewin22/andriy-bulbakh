<?php
/*
Template Name: Portfolio
*/
get_header();
?>
<?php get_router('portfolio') ?>

  <div class="portfolio">
    <div class="container">
      <h1><?php echo get_field('заголовок'); ?></h1>
      <ul class="portfolio__items">
      <?php   
          $args = array(
              'post_type' => 'portfolio',
              'posts_per_page' => 40
          );    
          $my_query = new WP_Query( $args ); 
          
          if ( $my_query->have_posts() ) {
              while ( $my_query->have_posts() ) {
                  $my_query->the_post();
                  
 
          if ( get_post_meta( get_the_ID(), 'portfolio_img', false ) ){ 
            $image_array = get_post_meta( get_the_ID(), 'portfolio_img', false );
          } 
          if ( $image_array ) {
            $counter = 0;
            foreach ( $image_array as $image ) {
                  $thumbimg = pods_image_url( $image['ID'], 'large');
                  $fullimg = pods_image_url( $image['ID'], 'full');
                  $counter++;
      ?>

          <li data-counter="<?php echo $counter - 1 ?>" class="portfolio__li">
            <div class="portfolio__li-img" style="background-image:url(<?php  echo $thumbimg ?>)"></div>
          </li>
          <?php
                }
              }
            }            
          }       
        wp_reset_postdata(); 
          ?>
      </ul>
    </div>
    <div class="portfolio__slider-pop-up">
      <div data-popup-close class="portfolio__slider-pop-up-close"></div>
      <div class="portfolio__slider">
        <div class="portfolio__slides">
        <?php   
          $args = array(
              'post_type' => 'portfolio',
              'posts_per_page' => 40
          );    
          $my_query = new WP_Query( $args ); 

          if ( $my_query->have_posts() ) {
              while ( $my_query->have_posts() ) {
                  $my_query->the_post();
 
          if ( get_post_meta( get_the_ID(), 'portfolio_img', false ) ){ 
            $image_array = get_post_meta( get_the_ID(), 'portfolio_img', false );
          }
            if ( $image_array ) {

              foreach ( $image_array as $image ) {
                  $fullimg = pods_image_url( $image['ID'], 'full');
      ?>
            <div data-slide class="portfolio__slide">
              <div
              data-slide-img
              class="portfolio__slide-img" 
              style="background-image:url(<?php  echo $fullimg ?>)"
              >
              </div>
            </div>
            <?php
                }
              }
            }            
          }       
        wp_reset_postdata(); 
          ?>
        </div>
      </div>
      <nav class="portfolio__slider-nav">
        <div data-nav="prev" class="portfolio__slider-nav-item portfolio__slider-nav-item--prev">
          <svg width="94px" height="14px" class="portfolio__slider-icon">
            <path d="M0.292892 8.7071C-0.0976334 8.31657 -0.0976333 7.68341 0.292893 7.29289L6.65685 0.928925C7.04738 0.5384 7.68054 0.5384 8.07107 0.928925C8.46159 1.31945 8.46159 1.95261 8.07107 2.34314L2.41422 7.99999L8.07107 13.6568C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.7071ZM94 9L1 8.99999L1 6.99999L94 7L94 9Z" fill="#292B33" fill-opacity="0.7"/>
          </svg>
        </div>
        <div data-nav="next" class="portfolio__slider-nav-item portfolio__slider-nav-item--next">
          <svg width="94px" height="14px" class="portfolio__slider-icon">
            <path d="M0.292892 8.7071C-0.0976334 8.31657 -0.0976333 7.68341 0.292893 7.29289L6.65685 0.928925C7.04738 0.5384 7.68054 0.5384 8.07107 0.928925C8.46159 1.31945 8.46159 1.95261 8.07107 2.34314L2.41422 7.99999L8.07107 13.6568C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.7071ZM94 9L1 8.99999L1 6.99999L94 7L94 9Z" fill="#292B33" fill-opacity="0.7"/>
          </svg>
        </div>
      </nav>
    </div>
  </div>

<?php include get_theme_file_path( './partials/components/footer.php' ); ?>
  <?php
  get_footer();
?> 
