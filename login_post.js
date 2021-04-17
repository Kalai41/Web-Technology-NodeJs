
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
	 res.write("Hello "+name+",Welcome to Agro Agrncies !! your email id "+email+" has been registered successfully");
	res.end(); 
	});
	
}).listen(3000);

console.log("Server started");
