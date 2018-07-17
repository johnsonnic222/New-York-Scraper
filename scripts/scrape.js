var axios = require("axios");
var cheerio = require("cheerio");


var scrape = function() {

  return axios.get("http://www.nytimes.com").then(function(res) {
    var $ = cheerio.load(res.data);
   
    var articles = [];

 
    $(".theme-summary").each(function(i, element) {
     

    
      var head = $(this)
        .children(".story-heading")
        .text()
        .trim();


        articles.push(dataToAdd);
      }
    });
    return articles;  
  });
};




module.exports = scrape;