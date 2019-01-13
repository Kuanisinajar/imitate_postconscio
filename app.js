// The Twitter API
// View the tutorial: https://codeburst.io/build-a-simple-twitter-bot-with-node-js-in-just-38-lines-of-code-ed92db9eb078

const Twitter = require('twitter');
const config = require('./config.js');
const T = new Twitter(config);


// Create Server and App
const express = require('express');
const app = express();
const server = require('http').Server(app);

app.use(express.static('./public'));

server.listen(3000, () => {
    console.log('listening to port 3000');
});

// Retrive Twitter Data

const params = {
    q: '',
    count: 10,
    result_type: 'recent',
    lang: 'en'
}

app.get('/search/:keyWord', (req, res) => {
    
    // set the key word
    params.q = req.params.keyWord;

    // go grab them
    T.get('search/tweets', params, function (err, data, response) {
        let requestedData=[];
        if (!err) {
            // Loop through the returned tweets
            for (let i = 0; i < data.statuses.length; i++) {
                requestedData.push(data.statuses[i].text);
            }
        } else {
            console.log(err);
        }
        res.end(JSON.stringify(requestedData));
    });
})
