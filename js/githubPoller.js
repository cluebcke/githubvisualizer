var https = require("https");
var port = 3000;
var totalCount;
var pages;
var delay = 4000;
var basePath = "/search/repositories?q=language:javascript";
var results;
var interval;

var ghOptions = {
  hostname: "api.github.com",
  port: 443,
  method: "GET",
  headers: {
    "User-Agent": "cluebcke"
  }
};

var callback;

var start = function(callbackFn) {
  callback = callbackFn;

  ghOptions.path = basePath;
  console.log("Performing initial search...");

  var req = https.request(ghOptions, function(res) {
    var responseText = "";

    res.on("data", function(chunk) {
      responseText += chunk;
    });

    res.on("end", function() {
      var response = JSON.parse(responseText);
      totalCount = response.total_count;
      if (totalCount > 1000) {
        // GitHub API only returns a max of 1000 search results
        totalCount = 1000;
      }
      pages = Math.ceil(totalCount / response.items.length);
      loopResults();
    });

  });
  req.on("error", function(e) {
    console.error(e);
  });

  req.end();
};

var getMoreResults = function() {
  var page = Math.round(Math.random() * pages);
  ghOptions.path = basePath + "&page=" + page;
  var req = https.request(ghOptions, function(res) {
    var responseText = "";

    res.on("data", function(chunk) {
      responseText += chunk;
    });

    res.on("end", function() {
      var response = JSON.parse(responseText);
      if (response.total_count) {
        results = response.items;
      }
    });

  });

  req.on("error", function(e) {
    console.error(e);
  });

  req.end();
};

loopResults = function() {
  interval = setInterval(function() {
    if (!results || results.length < 1) {
      callback("...loading...");
      getMoreResults();
    } else {
      callback(results.pop().description);
    }
  }, delay)
};

module.exports = {
  start: start,
  stop: function() {

  }
};
