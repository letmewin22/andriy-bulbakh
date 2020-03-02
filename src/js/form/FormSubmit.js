import FormInputs from './FormInputs.js'
import serialize from '../lib/formSend.js'
import pseudoPrototype from '../lib/pseudo.prototype.js'

export default class FormSubmit extends FormInputs {

  constructor() {
    super()
    pseudoPrototype()
    
    this.form.onsubmit = (e) => this.submit(e)

  }

  validation() {

    this.validateText.querySelector('.koef-inp').innerHTML = this.koef
    this.validateText.querySelector('.koef-outp').innerHTML = this.koef - this.phone.value.trim('').length
    this.validateText.style.opacity = '1'

    this.phone.focus()
    this.label.pseudoStyle('after', 'border-color', '#F44336!important')
  }

  requestLoad() {
    // let tl = new TimelineMax()
    // tl
    //   .to(that.thankYouScreen, 0.01, { display: 'flex', ease: Power1.easeInOut })
    //   .to(that.thankYouScreenBg2, 1, { opacity: 0.8, ease: Power1.easeInOut })
    //   .fromTo(that.thankYouScreenBg, 1.5, { y: '100%' }, { y: '0%', ease: Power1.easeInOut }, 0.2)
    //   .to(that.thankYouScreenContent, 1, { opacity: 1, ease: Power1.easeInOut }, 0.8)

    this.form.reset()
    document.body.classList.remove('form-focused')
    for (let input of this.input) {
      input.classList.remove('focus')
    }

    // dataLayer.push({ 'event': 'otpravka_form' })
  }


  async requestSend() {

    const URL = './mail.php'

    try {

      await fetch(URL, {
        method: 'POST',
        body: serialize(this.form),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      })
        .then(response => response.status >= 200 && response.status < 400 ?
          this.requestLoad() : alert('Something went wrong'))

    } catch (e) {
      console.log(e)
    }
  }



  submit(e) {

    if (this.phone.value.trim('').length < this.koef) {
      this.validation()
      e.preventDefault()
    } else {
      this.requestSend()
    }


    return false
  }
}
