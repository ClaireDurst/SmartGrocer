const router = require("express").Router();
const recipesRoutes = require("./recipes");
// const unirest = require('unirest');
const axios = require("axios");
const cheerio = require("cheerio");
var request = require("request");

// Recipe Routes





	router.post("/recipes", (req, res) => {
		request('http://food2fork.com/api/search?key=8a06dc5e795fe19bd343809f1cf30cf7&q='+req.body.recipe, function(error, response, body){
			body = JSON.parse(body)
			res.json(body.recipes)
		})		 
});

	router.get("/recipes/scrape", (req, res) => { 
	    request(req.body.recipe_f2f_url, function(error, response, html) {
			var $ = cheerio.load(html);
			var results = [];
			var push = false
			$("li").each(function(i, element){
				var ingredents = $(element).text();
				if(push){
					results.push(ingredents.trim());
				}
				if(ingredents == " "){
					push = true;
				}
			});
			res.json(results);
		});
	});

		



router.use("/plan", recipesRoutes);

module.exports = router;