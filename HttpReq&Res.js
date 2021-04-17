var http=require("http");

var server= http.createServer(function(request,response)
	{
        if(request.url=="/")
        {
			response.writeHead(200,{"Content-Type":"text/html"});
			response.write("<html><header><h1>Ex-5-Design a web application using HTTP Request and HTTP Response</h1><hr color='black'></header>");
			response.write("<br><h2 align='center'><font color='Red'>Welcome To Agro Agencies !!</font></h2>");
			response.write("<font color='blue'><body bgcolor='cornsilk'><br><Br><br><Br><font size='5'>Here the Instructions for You:<br><ul><li>You can visit our webpage if only you are an admin.</li><li>So kindly sign in first to get more details.</li><li>You can sign in by using our sign in link </li><li>Link is available in Bio!!..</li></ul></p></body>");
			response.write("<br><p align='center'><font color='red'><br><Br><br>Sign in first Hurry Up!!..</font></p>");
			response.write("<footer><hr color='black'><font size='5' color='black'><pre>				 							designed by 18ITR041@Kalaiyarasi</font></footer></html>");
			console.log("Request received from new customer");
        }
        else if(request.url=="/admin")
        {
			response.writeHead(200,{"Content-Type":"text/html"});
			response.write("<html><hr color='black'><header><h1>Ex-5-Design a web application using HTTP Request and HTTP Response</h1><hr color='black'></header>");
			response.write("<font color='Green'><h1 align='center'>Welcome To Agro Agencies</h1><br><br></font<br><ul><li><font color='red' size='6'>Now your an admin so you can see the cost details and availablity of the fertilizer in our shop.</li></ul>");
			response.write("<br> <body bgcolor='mistyrose'><tr><table cellspacing='3' cellspading='4' border='3' align='center'></td></tr><tr><th>Name :</th><td>Spic Urea</td></tr><tr><th><b>Manufacturing Process:</b></th><td>Urea is made when carbon dioxide is reacted with anhydrous ammonia. This process happens under intense pressure, at 350 degrees Fahrenheit.Urea is processed to take the form of granules or solid globules known as prills.Dry urea is very soluble and must be kept away from moisture until its use.</td></tr><tr><th><b>Advantages of Urea:</b><td><ul><li>In general, urea will provide the most nitrogen at the lowest cost.</li><li>It is easy to store and does not pose as a fire risk for long-term storage.</li><li> Urea may be mixed with other fertilizers or may be applied on its own.</li><li>For plants that love acidic soils, urea is one of the top fertilizers for acidifying soils.</li></ul></td></tr><th><b>Disadvantages of Urea:</b></th><td><ul><li>As a result of the chemical reaction that takes place when urea is applied to the soil, special care must be taken to ensure that the nitrogen is not lost when the ammonium evaporates.</li><li><This can make urea impractical for gardeners dealing with large plots of land.</li><li>The high solubility of urea also makes dry storage conditions imperative.</li></ul></td></tr><th><b>Price:</th><td>400</td></tr></table></body>");
			response.write("<footer><hr color='black'><font size='5' color='black'><pre>											designed by 18ITR041@Kalaiyarasi</font></footer></html>");
			console.log("Request received from Admin");
		}
        else if(request.url=="/feedback")
        {
			response.writeHead(200,{"Content-Type":"text/html"});
			response.write("<html><hr color='black'><header><h1>Ex-5-Design a web application using HTTP Request and HTTP Response</h1></header>");
			response.write("<body bgcolor='wheat'><hr color='black'><div><h1 align='center'><font color='red'><u>Customer Feedback<br><br></u></font></h1><pre><form><font face='Comic sans MS' size='5'color='blue'>User Name:	<input type='text' size='25' placeholder='Enter user name'><br>Phone-No:	<input type=text size='10' placeholder='Enter ph-no'><br>Email-id:		<input type='email' size='25' placeholder='Enter Email-id'><br>Comments:	<textarea name='message' rows='6' cols='50' placeholder='comment your opinion'></textarea></form><br><br></div><br>				<button type='submit'>Submit Here</button></html>");
			response.write("<h2 align='center'><font color='red'>Thank You !!</font></h2>");
			response.write("<footer><hr color='black'><font size='5' color='black'><pre>	 										designed by 18ITR041@Kalaiyarasi</font></footer>");
			console.log("Request received from Admin");
		}
        else
        {
			response.writeHead(200,{"Content-Type":"text/html"});
			response.write("<html><hr color='black'><header><h1>Ex-5-Design a web application using HTTP Request and HTTP Response</h1><hr color='black'></header>");
			response.write("<br><h1 align='center'><body bgcolor='cornsilk'><font color='red'>Oopss..Invalid Request<br><br><Br><Br></font></body>");
			response.write("<footer><br><br><br><font size='4' color='black'><p align='right'><br><BR><br><br><br>					 designed by 18ITR041@Kalaiyarasi</font></footer></html>");
			console.log("Request received from un registered customer");
		}
	});
	
server.listen(3000);

console.log("Server running");