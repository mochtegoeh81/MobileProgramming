var word = 'JavaScript'; 
var second = 'is'; 
var third = 'awesome'; 
var fourth = 'and'; 
var fifth = 'I'; 
var sixth = 'love'; 
var seventh = 'it!';
console.log(word.concat)
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(word+' '+second+' '+third+' '+fourth+' '+fifth+' '+sixth+' '+seventh);
}).listen(8080);