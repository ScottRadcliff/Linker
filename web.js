/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , twitter = require('ntwitter')

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/', function(req,res) {
twit.stream('statuses/scottradcliff', function(stream) {
      stream.on('data', function (data) {
        console.log(data);
      });
    });
  // res.render('index.jade', {title: "Linker"});
});
    
    // routes.index);
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


// Twitter
var twit = new twitter({
        consumer_key: 'Twitter',
        consumer_secret: 'API',
        access_token_key: '15789234-u1j8uYi9ZxXMb5KYIefDgcJplcmRuzxjaynG6QcDX',
        access_token_secret: 'jewifpNt2RfLR70dhD4tasw71orpxb41PTdaCosBw'
      });

twit.search('nodejs OR #node', function(err, data) {
    console.log(data);
  });



