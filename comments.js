//Create Web Server
//Create Web Server
var http = require('http');
var fs = require('fs');
var url = require('url');
var comments = [];
var server = http.createServer(function (req, res) {
    //parse url
    var parseObj = url.parse(req.url, true);
    var pathName = parseObj.pathname;
    if (pathName === '/') {
        fs.readFile('./views/index.html', function (err, data) {
            if (err) {
                return res.end('404 Not Found');
            }
            res.end(data);
        });
    } else if (pathName === '/post') {
        fs.readFile('./views/post.html', function (err, data) {
            if (err) {
                return res.end('404 Not Found');
            }
            res.end(data);
        });
    } else if (pathName.indexOf('/public/') === 0) {
        fs.readFile('.' + pathName, function (err, data) {
            if (err) {
                return res.end('404 Not Found');
            }
            res.end(data);
        });
    } else if (pathName === '/comments') {
        var data = JSON.stringify(comments);
        res.end(data);
    } else if (pathName === '/comment') {
        var comment = parseObj.query;
        comment.dateTime = '2018-05-12 12:12:12';
        comments.push(comment);
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    } else {
        fs.readFile('./views/404.html', function (err, data) {
            if (err) {
                return res.end('404 Not Found');
            }
            res.end(data);
        });
    }
});
server.listen(3000, function () {
    console.log('Server is running...');
});