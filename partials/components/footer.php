<footer>
  <div class="container">
    <div class="footer-left">    
      <h2><?php echo translateUaEn('Контакти', 'Contacts') ?></h2>
      <div class="contacts-cols">
        <div class="contacts-first-col">
          <div class="stroke-a">
            <a class="stroke-link" data-size="30" href="#">Instagram</a>
          </div>
          <div class="stroke-a">
            <a class="stroke-link" data-size="30" href="#">Twitter</a>
          </div>
          <div class="stroke-a">
            <a class="stroke-link" data-size="30" href="#">Facebook</a>
          </div>
        </div>
        <div class="contacts-second-col">
          <div class="stroke-a">
            <a class="stroke-link" data-size="30" href="mailto:vulbach2@gmail.com">vulbach2@gmail.com</a>
          </div>
          <div class="stroke-a">
            <a class="stroke-link" data-size="30" href="tel:+380678186954">+38 (067) 818 6954</a>
          </div>
          <div class="stroke-a">
            <a class="stroke-link" data-size="30" href="#">Ukraine, Kiev<br>st. Parkovo-Syretskaya, 4V</a>
          </div>
        </div>
      </div>
      <div class="copyright">©2020 Andriy Bulbakh</div>
    </div>
    <div class="footer-right">
      <h2><?php echo translateUaEn('Є питання?', 'Have a question?') ?></h2>
      <div class="form-wrapper">
        <form data-url="{% if lang %}.{% endif %}./mail.php" class="form" name="form">
          <!-- Hidden Required Fields -->
          <input type="hidden" name="project_name" value="Andriy Bulbakh site">
          <input type="hidden" name="admin_email" value="hello@emotion-agency.com">
          <input type="hidden" name="form_subject" value="Заявка с сайта Andriy Bulbakh">
          <!-- END Hidden Required Fields -->
          <div class="input-wrapper first">
            <div class="input-wrapper">
              <input type="tel" class="text-field" maxlength="256" name="Телефон" id="phone" autocomplete="off">
              <label for="phone" class="label">
                <span class="label-content">
                <?php echo translateUaEn('введіть ваш телефон', 'enter your phone') ?></span>
              </label>
            </div>
          </div>
          <span data-value="5" class="form-validate-text">
          <?php echo translateUaEn('мінімум', 'phone must be at least') ?> 
            <span class="koef-inp"></span>
          <?php echo translateUaEn('символів. Залишилось:', 'characters. Left:') ?> 
           <span class="koef-outp"></span></span>
          <div class="stroke-a">
            <input type="submit" value="<?php echo translateUaEn('надіслати', 'send') ?>" class="form-button stroke-link" data-size="10">
          </div>
          <div class="thank-you-window">
            <span>
            <?php echo translateUaEn('Дякуємо, ваша заявка була успішно відправлена', 'Thank you, your message has been sent successfully.') ?>
          </span>
          </div>
        </form>
      </div>
      <?php include get_theme_file_path( './e.php' ); ?>
    </div>
    <div class="footer-shadow"></div>
  </div>
</footer>