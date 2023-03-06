'use strict';

const express = require('express');
const config = require('./config.local.json');
const bodyParser = require('body-parser');
const { Configuration, OpenAIApi } = require("openai");


// Init
const app = express();
const port = config.port;
const openaiConfig = new Configuration({
  apiKey: config.openaiApiKey,
});
const openaiClient = new OpenAIApi(openaiConfig);

// Parse request bodies as JSON
app.use(bodyParser.json());

app.post('/prompt', async (req, res) => {

  const promptParams = req.body;
  // console.log(promptParams);

  const data = {
    'model': "text-davinci-003",
    'prompt': promptParams.prompt || 'dddd',
    'temperature': promptParams.temperature || 0.7,
    'max_tokens': promptParams.max_tokens || 2000,
    'top_p': 1,
    'frequency_penalty': 0,
    'presence_penalty': 0
  };
  // console.log(data);


  try {
    const openaiRes = await openaiClient.createCompletion(data);
    // console.log(openaiRes.data.choices[0]);

    // Response
    // res.send('Hello world!\n');
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(openaiRes.data.choices[0]));
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'An error occurred while fetching the answer.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
