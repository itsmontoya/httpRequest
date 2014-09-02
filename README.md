### httpRequest ###

#### Overview ####
httpRequest is an Ajax http request manager which takes in method, url, data, request type, response type, and return callback.

##### Request and request types #####
Currently the default of both of these values is text/plain. If the value is set to 'json', the data argument will be stringified and the content type for the request will be set to 'application/json'

#### Example ####
```js
var PageController = function(){

	/**
	 *  Will send a httpRequest request to:
	 *  '/api/page'
	 *
	 *  This request is sending no data within the request body (due to it being a GET request).
	 *  It is stating that the response data should be in JSON format. By default,
	 *  the system will parse the incoming JSON string so that it is a usable JSON object or array.
	 */	
	 new HttpRequest('GET', '/api/v1/page', null, null, 'json', load)

	function load(data){
		//httpRequest request is complete. Begin load procedures
	}
};
```