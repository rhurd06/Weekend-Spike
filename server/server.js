const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const creatureRouter = require('./routes/creature.router');


/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests


/** ---------- TODO - EXPRESS ROUTES ---------- **/
app.use('/creature', creatureRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});