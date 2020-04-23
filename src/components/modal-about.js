class ModalAbout extends HTMLElement {
  connectedCallback() {
    this._display = false

    this.render()
  }

  render() {
    this.innerHTML = `<div class="ModalContainer">
                        <h1>Meal Recipe</h1>
                        <h3>Version 1.0.0</h3>
                        <h6>Copyright (c) Musa Sutisna</h6>
                        <h6>
                          <a href="https://github.com/mu545/meal-recipe">https://github.com/mu545/meal-recipe</a>
                        </h6>
                      </div>
                      <div class="ModalOverlay"></div>`

    const domModalOverlay = this.querySelector('.ModalOverlay')

    domModalOverlay.addEventListener('click', () => {
      this.hide()
    })

    this.hide()
  }

  /**
   * Toggle modal.
   *
   * @return  void
   */
  toggle() {
    if (this._display) {
      this.hide()
    } else {
      this.show()
    }
  }

  /**
   * Show modal
   *
   * @return  void
   */
  show() {
    this._display = true
    this.style.display = 'initial'
  }

  /**
   * Hide modal.
   *
   * @return  void
   */
  hide() {
    this._display = false
    this.style.display = 'none'
  }
}

customElements.define('modal-about', ModalAbout)
