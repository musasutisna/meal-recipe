import 'styles/global.css'
import 'components/container-contents.js'
import 'components/menu-main.js'
import 'components/modal-about.js'
import 'components/list-meal.js'
import DataMeals from 'data/meals.js'

const main = () => {
  const domContainerContents = document.querySelector('container-contents')
  const domMenuMain = document.querySelector('menu-main')
  const domModalAbout = document.querySelector('modal-about')

  let domListMeal = null

  const searchMeals = (keyword) => {
    if (!domListMeal) {
      domListMeal = document.createElement('list-meal')
      domListMeal.onClick = detailMeal
      domContainerContents.newContent = domListMeal
    }

    DataMeals.searchMeals(keyword)
      .then(result => {
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

  }

  // init
  domMenuMain.onSearch = searchMeals
  domMenuMain.onAbout = showAbout

  domMenuMain._onSearch('')
}

document.addEventListener('DOMContentLoaded', main)
