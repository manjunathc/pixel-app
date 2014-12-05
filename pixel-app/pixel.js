var express = require('express');
var app = express();
//var exec = require('exec'), child;

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public/'));

app.get('/test', function(req, res){
});

var bodyParser = require('body-parser');
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/test', function(req, res){
        console.log("POST Method called-->"+req.body.src);
        var inputParam = req.body.src;
        /*var jfile = 'java -jar /home/pi/Pixel-App/public/images/pixelc.jar --write --gif=/home/pi/Pixel-App/public/images/'+inputParam;
        
        if (child == undefined){
                
                child = exec(jfile,
                        function (error, stdout, stderr){
                        console.log('stdout: ' + stdout);
                                console.log('stderr: ' + stderr);
                                if(error !== null){
                                        console.log('exec error: ' + error);
                        }else{
                                res.send("Successfully called the pixel");
                        }
                        });
        }
            
        console.log("Called POST Method called-->"+child.pid);*/
        res.send("Success");
        
    if(req.xhr || req.accepts('json,html')==='json'){
            
        // if there were an error, we would send { error: 'error description' }
        //res.send({ success: true });
    } else {
            
        // if there were an error, we would redirect to an error page
        //res.redirect(303, '/thank-you');
    }
});


// custom 404 page
app.use(function(req, res){
        res.type('text/plain');
        res.status(404);
        res.send('404 - Not Found');
});

// custom 500 page
app.use(function(err, req, res, next){
        console.error(err.stack);
        res.type('text/plain');
        res.status(500);
        res.send('500 - Server Error');
});


app.listen(app.get('port'), function(){
  console.log( 'Express started on http://localhost:' +
    app.get('port') + '; with base directory'+__dirname+ 'press Ctrl-C to terminate.' );
});