const axios = require("axios");
const router = require("express").Router();

router.get("/recipes", (req, res) => {
	axios.get("https://webknox-recipes.p.mashape.com/recipes/search?cuisine=italian&diet=vegetarian&excludeIngredients=coconut&intolerances=egg%2C+gluten&number=10&offset=0&query=burger&type=main+course")
.header("X-Mashape-Key", "6mKYTe4mECmshF7c0dmlALEm9FXbp1cJS8kjsnKg7ddQfPnVIX")
.header("Accept", "application/json")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});
  // axios
  //   .get("", { params: req.query })
  //   .then(({ data: { results } }) => res.json(results))
  //   .catch(err => res.status(422).json(err));
});

// These code snippets use an open-source library.

module.exports = router;
