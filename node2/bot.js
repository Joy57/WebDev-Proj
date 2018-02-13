console.log("bot is about to start boi!");

var Twit = require('twit');

var config = require('./config');

// console.log(config);

//STEPS
//requires a twit packages
//make it authenticate 
//setup the parameters 
//make a get request  get()--> search? by hashtag, by location, or by user? whatever
//handle that get request



var T = new Twit(config);

var keywords = { q: 'newyear', count: 2 };

T.get('search/tweets', keywords , gotData);

function gotData (err, data, response) {
  var tweets = data.statuses;
    for (var i = 0; i< tweets.length; i++){
        console.log(tweets[i].text);
    }
}

tweetSchedule();
setInterval(tweetSchedule, 1000*20)

function tweetSchedule(){
    var r = Math.floor(Math.random()*100);

    var status = { status: 'random number: '+r+' #mrbot from Mr twit' };

    T.post('statuses/update', status , postStatus)


    function postStatus(err, data, response) {
      if (err){
          console.log("something went wrong...");
      }else {
          console.log("Posted!");
      }
    }
}


    