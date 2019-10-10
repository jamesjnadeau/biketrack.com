
 
var scrape = require('website-scraper');
var rimraf = require('rimraf');
var sitePath =  __dirname + '/site';


rimraf(sitePath, function () {
  var options = {
    urls: ['https://biketrack.com/'],
    directory: sitePath,
    recursive: true,
    maxRecursiveDepth: 5,
    onResourceSaved: (resource) => {
    	console.log(`Resource ${resource} was saved to fs`);
    },
    urlFilter: function(url){
     return url.indexOf('biketrack.com/') !== -1;
    },
  };
  console.log(options);
   
  // with promise
  scrape(options).then((result) => {
      console.log(result)
  }).catch((err) => {
      console.error(err)
  });
});


