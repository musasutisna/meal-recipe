import 'styles/global.css'
import 'components/container-contents.js'
import 'components/menu-main.js'
import 'components/modal-about.js'

const main = () => {
  const domContainerContents = document.querySelector('container-contents')
  const domMenuMain = document.querySelector('menu-main')
  const domModalAbout = document.querySelector('modal-about')

  domMenuMain.onSearch = (keyword) => {

  }

  domMenuMain.onAbout = () => {
    domModalAbout.toggle()
  }
}

document.addEventListener('DOMContentLoaded', main)
