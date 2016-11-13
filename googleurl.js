//coding to retrive google search
var google = require('google');
var events = require('events');

google.resultsPerPage = 25
var nextCounter = 0

var result_ready = new events.EventEmitter();

//store links in a variable
var storeLinks = []

var googleurls = function(keywords){

var result = google(keywords, function(err, res){
        if(err) throw err;

        //store every links in storeLinks array
        for(var i=0; i<res.links.length; i++){
            storeLinks.push(res.href);
            if(i==google.resultsPerPage){
                result_ready.emit("fullyLoaded");
            }
        }

        
    });

    result_ready.emit('fullyLoaded', function(result){
        console.log(result);
    });


};