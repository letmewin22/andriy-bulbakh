<?php
/*
Template Name: About
*/
get_header();
?>
<?php get_router('about') ?>


<header class="header">
  <div class="container about-container">
    <div class="header__text-content">
      <h1 class="about-h1">{{ h1 }}</h1>
      <p class="descriptor about-descriptor">{{ descriptor }}</p>
    </div>
    <div class="header__about-img">
      <div class="header__img__wrapper img-wrapper">
        <div class="header__img__rewealer"></div>
        <img src="<?php echo get_template_directory_uri() ?>/img/about/header.jpg" alt="house">
      </div>
    </div>
    <div class="header-img-shadow about-shadow"></div>
  </div>
</header>
<main>
  <div class="extra-text">
    <div class="container second-line margin-top">
      <p>{{ secondScreenText }}</p>
    </div>
  </div>
  <div class="section">
    <div class="container center-container img-container">
      <div class="img-wrapper">
        <div class="img-rewealer left"></div>
        <img src="<?php echo get_template_directory_uri() ?>/img/about/Bulbakh.jpg" alt="about-2">
      </div>
    </div>
  </div>
  <section class="section default">
    <div class="default-item">
      <div class="container">
        <div class="default-item__content-wrapper">
          <div class="img-wrapper">
            <div class="img-rewealer left"></div>
            <img src="<?php echo get_template_directory_uri() ?>/img/about/2.jpg" alt="about-1">
          </div>
          <div class="default-text left">
            <h2 class="def-h2">{{ thirdScreenH2 }}</h2>
            <p>{{ thirdScreenText|safe }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section default">
    <div class="default-item">
      <div class="container">
        <div class="default-item__content-wrapper reverse">
          <div class="img-wrapper">
            <div class="img-rewealer right"></div>
            <img src="<?php echo get_template_directory_uri() ?>/img/about/3.jpg" alt="about-3">
          </div>
          <div class="default-text right">
            <h2 class="def-h2">{{ fourthScreenH2 }}</h2>
            <p>{{ fourthScreenText }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="extra-text">
    <div class="container second-line margin-top">
      <p>{{ fivethScreenText }}</p>
    </div>
  </div>
  <section class="section default">
    <div class="default-item">
      <div class="container last">
        <div class="default-item__content-wrapper">
          <div class="img-wrapper">
            <div class="img-rewealer left"></div>
            <img src="<?php echo get_template_directory_uri() ?>/img/about/4.jpg" alt="about-1">
          </div>
          <div class="default-text left">
            <h2 class="def-h2">{{ sixthScreenH2 }}</h2>
            <p>{{ sixthScreenText|safe }}</p>
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
