http=require('http');
url=require('url');
querystring = require('querystring');
function onRequest(request,response)
{
    var path = url.parse(request.url).pathname;
    console.log('Request for'+path+'received.');
    var query =url.parse(request.url).query;
    console.log(query);
    var name = querystring.parse(query)["username"];
    var email=querystring.parse(query)["email"];
    response.write("<html><header><hr color='black'><h2><font color='blue' face='sanss-serif'>Ex-6-Develop simple login page by performing event handling using GET method</font></h2></header><hr color='black'>");
    response.write("<body bgcolor='Aquamarine' > <font size='6' face='serif' color='black'><p align='center'><br><br><Br><Br>");
    response.write('Hello '+name+', welcome to Agro Agencies !!<br> your email id '+email+' has been registered successfully !!');
    response.write("<br><br>Now you can visit our entire page !!</p></font></body><br><Br><Br>")
    response.write("<br><br><br><br><footer align='center'><font color='red' size='5'><br><Br><br><b>Thank You !!<br><br>designed by 18ITR041 @ Kalaiyarasi</font></footer></html>");
    response.end();
}
http.createServer(onRequest).listen(8000);
console.log('Server has Started…….');


    response.write("<html><body bgcolor='skyblue'><header><h2>Ex-7-Design a simple calculator using 'Modules' in Node.js.</h2><hr><br></header>");
    response.write("<p align='center'><font size='5'>");
    response.write("</font></p></body></html>");