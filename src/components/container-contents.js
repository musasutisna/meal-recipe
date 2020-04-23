class ContainerContent extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = ''
  }
}

customElements.define('container-contents', ContainerContent)
