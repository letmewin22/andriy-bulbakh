import Highway from '@dogstudio/highway'
import contactsLoader from '../loaders/contactsLoader.js'
import pageLoader from '../loaders/pageLoader.js'


class CustomRendererContacts extends Highway.Renderer {
  onEnterCompleted() {

    window.addEventListener('load', () => {
      pageLoader(contactsLoader)
    })

    if (document.querySelector('.loader').style.opacity === '0') {
      contactsLoader()
      document.body.style.position = 'static'
    }

  }
}
// Don`t forget to export your renderer
export default CustomRendererContacts
