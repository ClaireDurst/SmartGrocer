const router = require("express").Router();
const recipesRoutes = require("./recipes");
const unirest = require('unirest');
const axios = require("axios");
const cheerio = require("cheerio");
var request = require("request");

// Recipe Routes





	router.get("/recipes", (req, res) => {
		console.log("hello");
		paramater = "shredded%20chicken"
		request('http://food2fork.com/api/search?key=8a06dc5e795fe19bd343809f1cf30cf7&q='+paramater, function(error, response, body){
			body = JSON.parse(body)
			res.json(body.recipes)
		})		 
	});

	router.get("/recipes/scrape", (req, res) => { 
	    request("http://food2fork.com/view/Mac_and_Cheese_with_Roasted_Chicken_Goat_Cheese_and_Rosemary/e7fdb2", function(error, response, html) {
			var $ = cheerio.load(html);
			var results = [];
			$("li").each(function(i, element){
				var ingredents = $(element).text();

				results.push({
					ingredents: ingredents
				});
			});

			res.json(results);
		});
		

		
	   
	});



router.use("/plan", recipesRoutes);

module.exports = router;
