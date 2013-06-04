
var findCategoryName = function(page){
	return page.evaluate(function () {
		return $(".sectionHeader > h1").text();
	});
};

var findCategoriesUrls = function(page){
	return page.evaluate(function (){
	
		retTable = new Array();
	
		$(".xstreamMenu a").each( function (index) {
			console.log($(this).text() + " " + $(this).attr("href"));
			retTable.push( { name : $(this).text(), link : $(this).attr("href") });
		});
		
		return retTable;
	});
};

//Get number of subpages
var getNumberOfSubsites = function (page){
	return page.evaluate(function () {
		return $(".paginator > ul a").length;
	});
};

//Get movies from subsite
var getMoviesFromPage = function (page){ 
	return page.evaluate(function () {
		retTable = [];
	
		$(".story").each( function (index) {
			var obj = { url : $("a", $(this)).attr("href"), 
				  img : $("img",$(this)).attr("src") 
			};
			retTable.push( obj );
			console.log(JSON.stringify(obj));
		});
		
		return retTable;
	});
};

//Get single movie data
var getSingleMovie = function (page) {
	return page.evaluate(function () {
		$(".statistics > li > span").remove();
		return { title : $(".mainInfo h1").text() , 
			     category : $(".breadcrumbs a").first().text(),
			     description : $(".leadText").text(),
			     publication : $(".statistics li").first().text(),
			     url: "http://frontend.xstream.dk/adressatv/resources/content/mp4/2013-06/1370344019064328200-iPad_1400kbit_96_852x480.mp4" };
	});
};


var getSite = function(url, callback, arg){
	var page = require('webpage').create();
	var retVal = [];
	
	page.open(url, function(status) {
		if('fail' === status){
			console.log('{ERROR} Loading page ' + url);
		}else{
			//console.log('{SUCCESS} Loading page ' + url);
			retVal = callback(page, arg);
		}
	});
	
	return retVal;
};

var movies = [];

var userAgent = 'Mozilla/5.0(iPad; U; CPU iPhone OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B314 Safari/531.21.10';

console.log("{ \"movies\" : [");

var getMoviesForCategory = function (catId){
	getSite('http://www.adressa.no/tv/?categoryId=' + catId, function (page){
		
		//CATEGORY
		category = { name : findCategoryName(page), subPages : getNumberOfSubsites(page)};
		
		//SUBSITES
		for (i = 0; i < 1 ; i++){
			getSite('http://www.adressa.no/tv/?categoryId=' + catId + '&pageNo=' + i, function (page){
				var pageMovies = getMoviesFromPage(page);
				for (j in pageMovies){
					getSite(pageMovies[j].url, function(page ,img){
						var singleMovie = getSingleMovie(page);
						singleMovie.thumbnail = img;
						//console.log(img);
						console.log(JSON.stringify(singleMovie) + ",");
						
					},pageMovies[j].img);
				};
			});
		};
	});
}

getMoviesForCategory(52);

