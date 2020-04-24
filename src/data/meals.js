class Meals {
  static searchMeals(keyword) {
    return fetch(`${BASEURL_API}/search.php?s=${keyword}`)
      .then(data => {
        return data.json()
      })
  }
}

export default Meals
