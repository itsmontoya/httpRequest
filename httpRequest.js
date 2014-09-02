function HttpRequest(method, url, data, requestType, responseType, returnCB){
	var request = null;
	
	if(url && returnCB) cycle();
	else cycleError();
	
	function cycle(){
		if(!isDefined(requestType)) requestType = 'text'; 
		method = method.toUpperCase();
		request = new XMLHttpRequest();
		openRequest();
		setResponseType();
		setMethod();
		setRequest();
		sendRequest();
	}
	
	function cycleError(){ console.error("Uh oh! I need both URL and Callback to perform an HTTP Request."); }
	function openRequest(){ request.open(method, url + (url.indexOf('?') > -1 ? '&' : '?' ) + "ts=" + new Date().getTime(), true); }
	
	function getRequestData(){ if(!isDefined(data)) return null; else return rdProcess(); }
	function rdProcess(){ switch (requestType) { case 'text': return rdProcessText(); break; case 'json': return rdProcessJSON(); break; } }
	function rdProcessText(){ setRequestHeaders(request, 'text/plain'); return data; }
	function rdProcessJSON(){ setRequestHeaders(request, 'application/json'); return JSON.stringify(data); }
		
	function setRequestHeaders(r, contentType){ r.setRequestHeader('Content-type', contentType); }
	function setRequest(){ request.responseType = responseType; request.onload = response; }
	function setResponseType(){ if(!isDefined(responseType)) responseType = 'text'; }
	function setMethod(){ if(!isDefined(method)) method = 'GET'; }
	
	function sendRequest(){ var d = getRequestData(); request.send(d); }
	function response(){ if(returnCB) returnCB(getData(), request.status); request = null; }
	function getData(){ if(responseType == 'text') return request.responseText; else return request.response; }
}