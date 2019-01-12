// The Twitter API
// View the tutorial: https://codeburst.io/build-a-simple-twitter-bot-with-node-js-in-just-38-lines-of-code-ed92db9eb078

const Twitter = require('twitter');
const config = require('./config.js');

const T = new Twitter(config);

const params = {
    q: '#nodejs',
    count: 10,
    result_type: 'recent',
    lang: 'en'
}

// T.get('search/tweets', params, function (err, data, response) {
//     if (!err) {
//         // Loop through the returned tweets
//         for (let i = 0; i < data.statuses.length; i++) {
//             // Get the tweet Id from the returned data
//             let id = { id: data.statuses[i].id_str }
//             // Try to Favorite the selected Tweet
//             console.log(data.statuses[i].text);
//         }
//     } else {
//         console.log(err);
//     }
// });

// Create Server and App
const express = require('express');
const app = express();
const server = require('http').Server(app);

app.use(express.static('./public'));

server.listen(3000, () => {
    console.log('listening to port 3000');
});
