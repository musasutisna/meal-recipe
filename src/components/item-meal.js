class ItemMeal extends HTMLElement {
  /**
   * Set meal.
   *
   * @param   Object
   * @return  void
   */
  set meal(meal) {
    this._meal = meal

    this.render()
  }

  /**
   * Handler meal item clicked.
   *
   * @param   Function
   * @return  void
   */
  set onClick(handler) {
    this._onClick = handler
  }

  render() {
    this.innerHTML = `<div class="MealImage">
                        <img src="${this._meal.strMealThumb}">
                      </div>
                      <p class="MealName">${this._meal.strMeal}</p>`
  
    this.addEventListener('click', () => {
      this._onClick(this._meal)
    })
  }
}

customElements.define('item-meal', ItemMeal)
