import 'components/item-meal.js'

class ListMeal extends HTMLElement {
  /**
   * Set meals.
   *
   * @param   Object
   * @return  void
   */
  set meals(meals) {
    this._meals = meals

    this.render()
  }

  /**
   * Set error message.
   *
   * @param   String
   * @return  void
   */
  set errorMessage(message) {
    this.innerHTML = `<h1>Meal Recipes</h1>
                      <p class="Message">${message}</p>`
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
    this.innerHTML = '<h1>Meal Recipes</h1>'

    for (var meal of this._meals) {
      const domItemMeal = document.createElement('item-meal')

      domItemMeal.meal = meal
      domItemMeal.onClick = this._onClick

      this.appendChild(domItemMeal)
    }
  }
}

customElements.define('list-meal', ListMeal)
