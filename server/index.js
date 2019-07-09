import express from "express";
import mongoose from "mongoose";
import router from './express/routes'
// const bodyParser = require('body-parser')
const app = express();
// const cors = require('cors');


mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://Oprah:Oprah@cluster0-chqnf.mongodb.net/test?retryWrites=true&w=majority");

app.use(router)
// app.use(cors())

const port = process.env.PORT || 3105;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
