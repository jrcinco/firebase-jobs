'use strict';

// [START app]
const express = require('express');
const app = express();
const PubSub = require('@google-cloud/pubsub');
// Instantiate a pubsub client
const pubsub = PubSub();

const dev = 'project01'; // <Replace the Project Key> use [> firebase list for displaying preoject keys.

app.get('/publish/:topic', (req, res) => {  
  if (req.get('X-Appengine-Cron') !== 'true') {
    res.status(401).send('Invalid Request');
  } else {
    const topic = pubsub.topic('projects/'+dev+'/topics/'+req.params.topic);
    topic.publish({
      data: {msg: 'hello, world!'}
    }, (err) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send('Message sent');
      }
    }); 
  }   
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END app]
