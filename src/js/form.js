import serialize from './lib/formSend.js';
import pseudoPrototype from './lib/pseudo.prototype.js';

export default function FormInputs() {

  const input = document.querySelectorAll('.input-wrapper input');
  const form = document.querySelector('form');
  const phone = document.getElementById('phone');
  const chbox = document.querySelector('.input-checkbox');
  const validateText = document.querySelector('.form-validate-text');
  const formButton = document.querySelector('.form .button');
  const thankyouButton = document.querySelector('.thank-you-screen .button');
  const label = document.querySelectorAll('.label');
  const popUpButton = document.querySelector('.button.pop-up');
  const formPopUp = document.querySelector('.form-pop-up');
  const popUpClose = document.querySelector('.close-pop-up');
  const thankYouScreen = document.querySelector('.thank-you-screen');
  const thankYouScreenBg = document.querySelector('.thank-you-bg');
  const thankYouScreenBg2 = document.querySelector('.thank-you-bg-white');
  const thankYouScreenContent = document.querySelector('.thank-you-content');
  const thislabel = document.querySelectorAll('label')[1];

  pseudoPrototype();

  if (form) {

    if (formPopUp) {
      function popUp() {
        formPopUp.style.opacity = '1';
        formPopUp.style.pointerEvents = 'auto';
      }

      function closePopUp() {
        formPopUp.style.opacity = '0';
        formPopUp.style.pointerEvents = 'none';
      }

      popUpButton.addEventListener('click', popUp);
      popUpClose.addEventListener('click', closePopUp);
    }


    function focus() {
      this.classList.add('focus');
      document.body.classList.add('form-focused');
    }

    function blur() {
      if (this.value === '') {
        this.classList.remove('focus');
        document.body.classList.remove('form-focused');
      }

    }

    for (let i = 0; i < input.length; i++) {
      input[i].addEventListener('focus', focus);
    }

    for (let i = 0; i < input.length; i++) {
      input[i].addEventListener('blur', blur);
    }

    document.body.onclick = function() {
      validateText.style.opacity = '0';
      thislabel.classList = 'label';
    };
    phone.oninput = function() {
      validateText.style.opacity = '0';
      thislabel.pseudoStyle().classList = 'label';

    };

    form.onsubmit = function validator(e) {
      if (phone.value === '') {
        validateText.innerHTML = 'поле не може бути порожнім';
        validateText.style.opacity = '1';
        e.preventDefault();
        phone.focus();
        thislabel.pseudoStyle('after', 'border-color', '#F44336!important');
        return false;
      } else {
        validateText.style.opacity = '0';

        let request = new XMLHttpRequest();
        request.open('POST', './mail.php', true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

        let data = serialize(form);

        request.onload = function() {
          if (this.status >= 200 && this.status < 400) {
            setTimeout(function() {
              let tl = new TimelineMax();
              tl
                .to(thankYouScreen, 0.01, { display: 'flex', ease: Power1.easeInOut })
                .to(thankYouScreenBg2, 1, { opacity: 0.8, ease: Power1.easeInOut })
                .fromTo(thankYouScreenBg, 1.5, { y: '100%' }, { y: '0%', ease: Power1.easeInOut }, 0.2)
                .to(thankYouScreenContent, 1, { opacity: 1, ease: Power1.easeInOut }, 0.8);

              form.reset();
              dataLayer.push({ 'event': 'otpravka_form' });
              document.body.classList.remove('form-focused');
              for (let i = 0; i < input.length; i++) {
                input[i].classList.remove('focus');
              }

              if (formPopUp) {

                formPopUp.style.opacity = '0';
                formPopUp.style.pointerEvents = 'none';
              }

            }, 1000);
          }
        };

        request.send(data);
        return false;
      }
    };

    // chbox.onchange = function inputCheck() {
    //   formButton.style.transition = 'opacity .3s ease';
    //   if (!chbox.checked) {
    //     formButton.style.pointerEvents = 'none';
    //     formButton.style.opacity = '0.7';
    //   } else {
    //     formButton.style.pointerEvents = 'auto';
    //     formButton.style.opacity = '1';
    //   }
    // };

    // thankyouButton.onclick = function() {
    //   let tl = new TimelineMax();
    //   tl
    //     .to(thankYouScreenContent, 1, { opacity: 0, ease: Power1.easeInOut })
    //     .to(thankYouScreenBg, 1.5, { y: '-100%', ease: Power1.easeInOut }, 0.5)
    //     .to(thankYouScreenBg2, 1, { opacity: 0, ease: Power1.easeInOut }, 1)
    //     .to(thankYouScreen, 0.01, { display: 'none', ease: Power1.easeInOut });
    // };

  }
}
