const { default: axios } = require("axios")

async function getFilterDataFromApi(url) {
  let data = []
  try {
    const response = await axios.get(url)
    data = response.data?.collection.items
  } catch (e) {
    console.error("error:", e)
  }

  let linksArray = []
  data.forEach((element) => {
    element?.links?.forEach((elm) => {
      if (elm.render === "image") linksArray.push(elm.href)
    })
  })
  console.log(linksArray)
  return linksArray
}

const result = getFilterDataFromApi("https://images-api.nasa.gov/search?q=moon")
console.log("reuslt", result)
