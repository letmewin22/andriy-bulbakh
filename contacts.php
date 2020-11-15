<?php
/*
Template Name: Contacts
*/
get_header();
?>
<?php get_router('contacts') ?>

<div class="contacts-page-wrapper">
  <div class="extra-text">
    <div class="container">
      <h1><?php echo get_field('заголовок'); ?></h1>
    </div>
  </div>
<?php include get_theme_file_path( './partials/components/footer.php' ); ?>
</div>

<?php
get_footer();
?>
