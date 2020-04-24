class ContainerContent extends HTMLElement {
  /**
   * Set new content.
   *
   * @param   DOM
   * @return  void
   */
  set newContent(domContent) {
    this.innerHTML = ''

    this.appendChild(domContent)
  }
}

customElements.define('container-contents', ContainerContent)
