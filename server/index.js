const express = require('express');
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require('./models');

// Routers
const postRouter = require('./routes/Posts.js');
app.use("/posts", postRouter);

db.sequelize.sync().then(()=> {
    app.listen(3002, ()=>{
        console.log("Server running on port 3002");
    });
})
