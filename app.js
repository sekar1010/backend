// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const morgan = require('morgan');
// const userRouter = require('./user-router');
// const mongoose = require('mongoose');

// //connection
// //sample
// //8LjYDTAGpY6OuyfH
// const USERNAME = "sample";
// const PASSWORD = "8LjYDTAGpY6OuyfH";
// const DB_NAME="sample_db"
// const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@samplecluster0.6xvtnos.mongodb.net/${DB_NAME}`;
// mongoose.connect(URL);
// mongoose.connection.on('connected', () => {
//     console.log("mongoDB is connected")
// });


// const app = express(); 

// //middleware
// app.use(morgan("tiny"));
// app.use(cors());
// app.use(bodyParser.json());


// //routes
// app.use('/song',userRouter);
// // app.all('/',(req,res)=> {
// //     res.send("application is working fine");
// // })

 



// module.exports = app;

// Import
const express = require('express');
const { json } = require('body-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors=require('cors');
const mongoose = require("mongoose");

// const userRouter = require('./routes/user');
// const sandeepRouter = require('./routes/sandeep');
const userRouter = require('./user-router');



//Mongo Database Connection
// TODO: enter your 👇 database name below 
const USERNAME = "sample";
const PASSWORD = "8LjYDTAGpY6OuyfH";
const DB_NAME = "sample_db";
// const URI = mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.mcfdnaj.mongodb.net/${DB_NAME};
const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@samplecluster0.6xvtnos.mongodb.net/${DB_NAME}`;

mongoose.connect(URL);
mongoose.connection.on("connected", () => {
    console.log("mongodb is connected successfully");
});

// Declaration
const app = express();

// Middle Ware
app.use(logger("tiny"));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

// Routing
app.use('/song', userRouter);
// app.use('/sandeep',sandeepRouter)

// Export
module.exports = app;