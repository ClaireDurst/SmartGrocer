const router = require("express").Router();
const axios = require('axios');
// router.route("/")
// .get();

// router.route("/:id")

router.get("/recipes", (req, res) => {
	console.log('HELLO')
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






module.exports = router;