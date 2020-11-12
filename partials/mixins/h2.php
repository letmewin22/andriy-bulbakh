<?php function h2($text, $selector = null)
{
  ?>
    <div class="h2-wrapper">
    <div class="h2__line h2__line--before <?php if($selector !== 'a-cancel') echo 'a-line'?>"></div>
    <h2 class="h2 <?php if($selector) { echo $selector; }?> a-h2"><?php echo $text ?></h2>
    <div class="h2__line h2__line--after <?php if($selector !== 'a-cancel') echo 'a-line'?>"></div>
  </div>
  <?php
} ?>