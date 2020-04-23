class MenuMain extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  /**
   * Handler submited search input.
   *
   * @param   Function
   * @return  void
   */
  set onSearch(handler) {
    this._onSearch = handler
  }

  /**
   * Handler clicked about button.
   *
   * @param   Function
   * @return  void
   */
  set onAbout(handler) {
    this._onAbout = handler
  }

  render() {
    this.innerHTML = `<div class="SearchBox">
                        <input class="SearchKeyword" type="text" placeholder="search meal recipe ...">
                        <button class="SearchButton" type="button"></button>
                      </div>
                      <button class="About" type="button"></button>`

    const domSearchKeyword = this.querySelector('.SearchKeyword')
    const domSearchButton = this.querySelector('.SearchButton')
    const domAbout = this.querySelector('.About')

    domSearchKeyword.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) {
        this._onSearch(domSearchKeyword.value)
      }
    })

    domSearchButton.addEventListener('click', () => {
      this._onSearch(domSearchKeyword.value)
    })

    domAbout.addEventListener('click', () => {
      this._onAbout()
    })
  }
}

customElements.define('menu-main', MenuMain)
