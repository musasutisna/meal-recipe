import 'styles/global.css'
import 'components/container-contents.js'
import 'components/menu-main.js'
import 'components/modal-about.js'
import 'components/list-meal.js'
import 'components/detail-meal.js'
import DataMeals from 'data/meals.js'

const main = () => {
  const domContainerContents = document.querySelector('container-contents')
  const domMenuMain = document.querySelector('menu-main')
  const domModalAbout = document.querySelector('modal-about')

  let currentKeyword = null
  let currentMeals = []

  const searchMeals = (keyword) => {
    currentKeyword = keyword

    const domListMeal = document.createElement('list-meal')

    domListMeal.onClick = detailMeal
    domContainerContents.newContent = domListMeal

    DataMeals.searchMeals(keyword)
      .then(result => {
        currentMeals = result.meals
        domListMeal.meals = result.meals
      })
      .catch(() => {
        domListMeal.errorMessage = `no meal recipes found for "${keyword}"`
      })
  }

  const showAbout = () => {
    domModalAbout.toggle()
  }

  const detailMeal = (meal) => {
    const domDetailMeal = document.createElement('detail-meal')

    domDetailMeal.onBack = backToPreviousPage
    domContainerContents.newContent = domDetailMeal

    domDetailMeal.meal = meal
  }

  /**
   * Back to previous page from detail item.
   *
   * @return  void
   */
  const backToPreviousPage = function () {
    const domListMeal = document.createElement('list-meal')

    domListMeal.onClick = detailMeal
    domListMeal.meals = currentMeals
    domContainerContents.newContent = domListMeal
  }

  // init
  domMenuMain.onSearch = searchMeals
  domMenuMain.onAbout = showAbout

  domMenuMain._onSearch('')
}

document.addEventListener('DOMContentLoaded', main)
