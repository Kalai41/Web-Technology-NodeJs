var http=require("http");
url=require('url');
querystring = require('querystring');

function onRequest(request,response)
{
	
	var p=url.parse(request.url);
	console.log('Request for'+p.pathname+'received.');
	var q =p.query
	console.log(q);
	var m= querystring.parse(q)["n1"];

	var n=querystring.parse(q)["n2"];
	var c1=querystring.parse(q)["add"];
	var c2=querystring.parse(q)["sub"];
	var c3=querystring.parse(q)["mul"];
	var c4=querystring.parse(q)["div"];
	
	if(c1)
	{
		var a=Number.parseInt(m)+Number.parseInt(n);
		response.write("Addition of "+ m +" and " +n+" is : "+a);
	}
	else if(c2)
	{
		var a=Number.parseInt(m)-Number.parseInt(n);
		response.write("Subraction of "+ m +" and " +n+" is : "+a);
	}
	else if(c3)
	{
		var a=Number.parseInt(m)*Number.parseInt(n);
		response.write("Multiplication of "+ m +" and " +n+" is : "+a);
	}
	else if(c4)
	{
		var a=Number.parseInt(m)/Number.parseInt(n);
		response.write("Division of "+ m +" and " +n+" is : "+a);
	}
	response.end("");
	

}
http.createServer(onRequest).listen(3000);
console.log('Server has Started…….');