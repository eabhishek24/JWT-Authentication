const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./router/AuthRouter');
const userRouter = require('./router/userRouter');

require('dotenv').config();
require('./models/db');

const PORT = process.env.PORT || 8080;

app.get('/ping',(req,res)=>{
    res.send("PONG");
});

app.use(bodyParser.json());
app.use(cors());
app.use('/auth',AuthRouter);
app.use('/user',userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
}); 