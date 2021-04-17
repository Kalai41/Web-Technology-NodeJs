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



http=require('http');
url=require('url');
querystring = require('querystring');
function onRequest(request,response)
{
    var path = url.parse(request.url).pathname;
    console.log('Request for'+path+'received.');
    var query =url.parse(request.url).query;
    //console.log(query);
    var name = querystring.parse(query)["username"];
    var email=querystring.parse(query)["email"];
    response.write('Hello'+name+',your email id'+email+'has been registered successfully');
    response.end();
}
http.createServer(onRequest).listen(8000);
console.log('Server has Started…….');



<html>
    <head>
        <title>Login</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    </head>
    <body>
        <div class="container">
            <form action="http://localhost:8000/login_get_method method="get">
                <div class="form-group">
                    <h3><label for="name">Name:</label></h3>
                    <input type="text" class="form-control" id="username" placeholder="Enter Your Name" name="username" required>
                </div>
                <div class="form-group">
                    <h3><label for="name">Email_id:</label></h3>
                    <input type="email" class="form-control" id="email" placeholder="Enter your email" name="email" required>
                </div>
                <div class="submit">
                    <button type="submit" class="btn btn-default">Submit</button>
                </div>
            </form>
        </div>
    </body>
</html>



var http = require('http');
var querystring=require('querystring');
var qs,name,email;
 http.createServer(function(req, res) {  
	var data1= '';
	req.on('data', function(chunk) {   
		console.log(chunk);
		data1 += chunk;  
		res.write("My Data id"+data1);
	});
	req.on('end', function() {
		 qs=querystring.parse(data1);
		 console.log(qs);
	 name=qs['username'];
	 email=qs['email'];
	 res.write("Hello "+name+", your email id "+email+" has been registered successfully");
	res.end(); 
	});
	
}).listen(7777);

console.log("Server started");
