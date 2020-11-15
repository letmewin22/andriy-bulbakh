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
      <h1 class="about-h1"><?php echo get_field('заголовок_перший_екран'); ?></h1>
      <p class="descriptor about-descriptor"><?php echo get_field('текст_перший_екран'); ?></p>
    </div>
    <div class="header__about-img">
      <div class="header__img__wrapper img-wrapper">
        <div class="header__img__rewealer"></div>
        <img src="<?php echo get_field('зображення_перший_екран'); ?>" alt="house">
      </div>
    </div>
    <div class="header-img-shadow about-shadow"></div>
  </div>
</header>
<main>
  <div class="extra-text">
    <div class="container second-line margin-top">
      <p><?php echo get_field('текст_другий_екран'); ?></p>
    </div>
  </div>
  <div class="section">
    <div class="container center-container img-container">
      <div class="img-wrapper">
        <div class="img-rewealer left"></div>
        <img src="<?php echo get_field('зображення_другий_екран'); ?>" alt="about-2">
      </div>
    </div>
  </div>
  <section class="section default">
    <div class="default-item">
      <div class="container">
        <div class="default-item__content-wrapper">
          <div class="img-wrapper">
            <div class="img-rewealer left"></div>
            <img src="<?php echo get_field('зображення_третій_екран'); ?>" alt="about-1">
          </div>
          <div class="default-text left">
            <h2 class="def-h2"><?php echo get_field('заголовок_третій_екран'); ?></h2>
            <p><?php echo get_field('текст_третій_екран'); ?></p>
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
            <img src="<?php echo get_field('зображення_четвертий_екран'); ?>" alt="about-3">
          </div>
          <div class="default-text right">
            <h2 class="def-h2"><?php echo get_field('заголовок_четвертий_екран'); ?></h2>
            <p><?php echo get_field('текст_четвертий_екран'); ?></p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="extra-text">
    <div class="container second-line margin-top">
      <p><?php echo get_field('текст_пятий_екран'); ?></p>
    </div>
  </div>
  <section class="section default">
    <div class="default-item">
      <div class="container last">
        <div class="default-item__content-wrapper">
          <div class="img-wrapper">
            <div class="img-rewealer left"></div>
            <img src="<?php echo get_field('зображення_шостий_екран'); ?>" alt="about-1">
          </div>
          <div class="default-text left">
            <h2 class="def-h2"><?php echo get_field('заголовок_шостий_екран'); ?></h2>
            <p><?php echo get_field('текст_шостий_екран'); ?></p>
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
