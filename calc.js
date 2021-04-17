var http=require("http");
url=require('url');
querystring = require('querystring');

function onRequest(request,response)
{
	response.write("<html><body bgcolor='skyblue'><header><h1>Ex-7-Design a simple calculator using 'Modules' in Node.js.</h1><hr><br></header>");
    response.write("<br><Br><Br><p align='center'><font size='6' color='white'><b>");
	var p=url.parse(request.url);
	console.log('Request for'+p.pathname+'received.');
	var q =p.query
	console.log(q);
	var m= querystring.parse(q)["num1"];

	var n=querystring.parse(q)["num2"];
	var c1=querystring.parse(q)["add"];
	var c2=querystring.parse(q)["sub"];
	var c3=querystring.parse(q)["mul"];
    var c4=querystring.parse(q)["div"];
    var c5=querystring.parse(q)["avg"];
	
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
    if(c5)
	{
		var a=(Number.parseInt(m)+Number.parseInt(n))/2;
		response.write("Average of "+ m +" and " +n+" is : "+a);
	}
    response.write("</font></p><br><Br><Br><br><br><br></body><br><br><br><BR><br><Br><Br><br><footer align='center'><font color='black' size='5'><br><Br><br>designed by 18ITR041 @ Kalaiyarasi</font></footer></html>");
	response.end("");
	

}
http.createServer(onRequest).listen(3000);
console.log('Server has Started…….');