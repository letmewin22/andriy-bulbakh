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
      <h1>{{ h1 }}</h1>
      <p class="descriptor">{{ descriptor }}</p>
    </div>
    <div class="header__img">
      <div class="header__img__wrapper img-wrapper">
        <div class="header__img__rewealer"></div>
        <img src="<?php echo get_template_directory_uri() ?>/img/header-img.jpg" alt="house">
      </div>
    </div>
    <div class="header-img-shadow"></div>
  </div>
</header>
<main>
  <div class="extra-text center">
    <div class="container margin-top center-container">
      <p>{{ secondScreenText }}</p>
    </div>
  </div>
  <section class="section service">
    <div class="service-item mob-left">
      <div class="container">
        <div class="service-item__content-wrapper">
          <a href="<?php echo get_site_url()?>/architecture" class="img-wrapper">
            <div class="img-rewealer left"></div>
            <div class="img-overlay"></div>
            <img src="<?php echo get_template_directory_uri() ?>/img/services-main/1.jpg" alt="services-1">
          </a>
          <div class="service-name left">
            <span class="service-name__num">01</span>
            <div class="stroke-a">
              <h2 class="stroke-link" data-size="30"><span><a href="<?php echo get_site_url()?>/architecture">{{ firstServiceName }}</a></span></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section service">
    <div class="service-item mob-right">
      <div class="container">
        <div class="service-item__content-wrapper reverse">
          <a href="<?php echo get_site_url()?>/interior" class="img-wrapper">
            <div class="img-rewealer right"></div>
            <div class="img-overlay"></div>
            <img src="<?php echo get_template_directory_uri() ?>/img/services-main/2.jpg" alt="services-2">
          </a>
          <div class="service-name right">
            <span class="service-name__num">02</span>
            <div class="stroke-a">
              <h2 class="stroke-link" data-size="30"><span><a href="<?php echo get_site_url()?>/interior">{{ secondServiceName }}</a></span></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section service">
    <div class="service-item mob-left">
      <div class="container">
        <div class="service-item__content-wrapper">
          <a href="<?php echo get_site_url()?>/handmade" class="img-wrapper">
            <div class="img-rewealer left"></div>
            <div class="img-overlay"></div>
            <img src="<?php echo get_template_directory_uri() ?>/img/services-main/3.jpg" alt="services-3">
          </a>
          <div class="service-name left">
            <span class="service-name__num">03</span>
            <div class="stroke-a">
              <h2 class="stroke-link" data-size="30"><span><a href="<?php echo get_site_url()?>/handmade">{{ thirdServiceName }}</a></span></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="extra-text">
    <div class="container second-line margin-top">
      <p>{{ afterServicesScreenText|safe }}</p>
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
            <h2 class="def-h2">{{ lastScreenH2 }}</h2>
            <p>{{ lastScreenText }}</p>
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
