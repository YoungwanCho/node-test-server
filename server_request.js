var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function (request, response) {
    console.log(request.url);
    var parsedUrl = url.parse(request.url);
    var resource = parsedUrl.pathname;
    
    console.log('resource path=%s', resource);

    if ( resource == '/zone')
    {
        response.writeHead(200, { 'Content-Type': 'text/html' });

        var parsedUrl = url.parse(request.url);
        console.log(parsedUrl);
    
        var parsedQuery = querystring.parse(parsedUrl.query, '&', '=');
        console.log(parsedQuery);
        
        var uuid = parsedQuery.uuid
        var market = parsedQuery.market;
        var version = parsedQuery.version;
        console.log('uuid : ' + uuid + '\nmarket : ' + market + '\nversion : ' + version);

        response.end('{"zone":"1","version_minor":"1.0.0","version_major":"1.0.2","market_url":"www.google.com","api_url":"game.dev.com"}');
    }
    else if (resource == './join')
    {
        
    }
    else if (resource == './login')
    {

    }
    else if (resource == './about_image')
    {
        
    }
});

server.listen(8081, function () {
    console.log('Server is running...');
})