$(function() { 
  //hide the #articles container
  $("#dairySubmenu").hide();
});

$("#dairy").on("click", function(){
   $("#dairySubmenu").show();
});

const API_ENDPOINT = 'https://api.spoonacular.com/recipes/findByIngredients;'
const API_QUERY = 'cuisine=Italian&includeIngredients=tomato,cheese';
const API_KEY ='&app_key=9388085398ad4012bdf43d023df991ac';

const REQUEST_URL = API_ENDPOINT + API_QUERY + API_KEY; 

  $("#submit-button").on("click", function(){
	$("input:checked").each(function(checkbox) {
		API_QUERY = API_QUERY + $(this).val() + "%20and%20"; 
		console.log(API_QUERY); 

$.getJSON(REQUEST_URL, function(data) {
data.results.forEach(function(entry){
document.getELementById("result-container").innerHTML +=foodItem;
}); 
}); 
