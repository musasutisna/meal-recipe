class ItemIngredient extends HTMLElement {
    /**
     * Set ingredient.
     *
     * @param   Object
     * @return  void
     */
    set ingredient(ingredient) {
        this._ingredient = ingredient

        this.render()
    }

    render() {
        this.innerHTML = `<img src="https://www.themealdb.com/images/ingredients/${this._ingredient.name}.png">
                          <p>${this._ingredient.name} (${this._ingredient.measure})</p>`
    }
}

customElements.define('item-ingredient', ItemIngredient)
