import 'components/item-ingredient.js'

class DetailMeal extends HTMLElement {
    /**
     * Set meal.
     */
    set meal(meal) {
        this._meal = meal

        this.render()
    }

    /**
     * Handler back to previus page.
     *
     * @param   Function
     * @return  void
     */
    set onBack(handler) {
      this._onBack = handler
    }

    render() {
        this.innerHTML = `<div class="Navigation">
                            <a class="Back" href="javascript:void(0)">
                              <i></i>
                              <span>Kembali</span>
                            </a>
                          </div>
                          <div class="Container">
                            <div class="MealImage">
                              <img src="${this._meal.strMealThumb}">
                              <h3>${this._meal.strMeal}</h3>
                            </div>
                            <div class="MealIngredients">
                              <h3>Ingredients</h3>
                            </div>
                          </div>`

        const domMealIngredients = this.querySelector('.MealIngredients')

        let totalIngredient = 1

        while (typeof this._meal[`strIngredient${totalIngredient}`] !== 'undefined' &&
                this._meal[`strIngredient${totalIngredient}`].length > 0) {
          const domItemIngredient = document.createElement('item-ingredient')

          domItemIngredient.ingredient = {
            name: this._meal[`strIngredient${totalIngredient}`],
            measure: this._meal[`strMeasure${totalIngredient}`],
            img: ''
          }

          domMealIngredients.appendChild(domItemIngredient)

          totalIngredient++
        }

        const domButtonBack = this.querySelector('.Back')

        domButtonBack.addEventListener('click', () => {
          this._onBack()
        })
    }
}

customElements.define('detail-meal', DetailMeal)
