export default class FormInputs {
  constructor() {
    this.input = document.querySelectorAll('.input-wrapper input')
    this.form = document.querySelector('form')
    this.phone = document.getElementById('phone')
    this.validateText = document.querySelector('.form-validate-text')
    this.formButton = document.querySelector('.form .button')
    this.label = document.querySelector('label')

    this.koef = +this.validateText.getAttribute('data-value')

    this.focus()
    this.blur()
    this.reset()

    this.phone.oninput = () => this.onInput()
  }

  onInput() {
    this.phone.value = this.phone.value.replace(
      /[A-z]|[А-я]|\s|[*!@#$%^&{}[\]~""/|=]/g,
      '',
    )
    if (this.phone.value.length < this.koef) {
      this.validation()
    } else {
      this.validateText.style.opacity = '0'
      this.label.pseudoStyle().classList = 'label'
    }
  }

  focus() {
    const that = this

    function focus(e) {
      e.target.classList.add('focus')
      document.body.classList.add('form-focused')
    }

    for (const input of that.input) {
      input.addEventListener('focus', focus)
    }
  }

  blur() {
    const that = this

    function blur(e) {
      if (e.target.value === '') {
        e.target.classList.remove('focus')
        document.body.classList.remove('form-focused')
      }
    }

    for (const input of that.input) {
      input.addEventListener('blur', blur)
    }
  }

  reset() {
    document.body.onclick = () => {
      this.validateText.style.opacity = '0'
      this.label.classList = 'label'
    }

    this.phone.oninput = () => {
      this.validateText.style.opacity = '0'
      this.label.pseudoStyle().classList = 'label'
    }
  }
}
