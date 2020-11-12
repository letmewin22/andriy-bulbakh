<?php function btn($text, $type = null, $class = null)
{
  ?>
  <button <?php if($type){ ?> type="<?php echo $type; echo '"';}?> class="btn <?php if($class) { echo $class; } ?>">
    <div class="btn__text-wrapper">
       <?php for ($i = 0; $i < 4; $i++) { 
         ?>
       <span class="btn__text"><?php echo $text ?></span>
       <?php
       } ?>
    </div>
    <div class="btn__overlay"></div>
  </button>
  <?php
} ?>
