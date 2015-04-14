var request = require('request');

// Function to make call to CKAN API.
exports.makeRequest = function (url, res) {
	request(url, function (error, response, body) {
	  if(!error && response.statusCode == 200) {
	  	var json = JSON.parse(body);

	  	// Remove CKAN specific JSON elements.
	  	json.result.records.forEach(function(element){
	  		delete element._full_text;
	  		delete element._id;
	  	});

	    renderResponse(null, json.result.records, res); 
	  }
	  else {
	  	renderResponse(error, response.statusCode, res);
	  }
	});
};

// Function to render response to client.
renderResponse = function (error, response, res){
	if(!error) {
		res.send(response).end();
	}
	else {
		res.status(error).send(response);
	}
}