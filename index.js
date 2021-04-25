const express = require('express');
const mongoose = require('mongoose');
const router = require('./services/router');

const MONGO_PORT = 27017;
const port = process.env.PORT || 2525;
const mongoUri = `mongodb://${process.env.db_service_name}:${MONGO_PORT}/${process.env.db_name}`;

const app = express();
const db = mongoose.connection;

mongoose.connect(mongoUri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });

db.on('connected',  () => {
    app.use(router);
    app.listen(port, () => console.log(`All set up. Listening on ${port}!`))
});