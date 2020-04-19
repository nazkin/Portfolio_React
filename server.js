const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const cors = require('cors');
const sendGrid = require('@sendgrid/mail');
const app = express();
const port = process.env.PORT || 3030;
var compression = require('compression');
const dotenv = require('dotenv');
dotenv.config();

app.use(bodyParser.json());
app.use(cors());
app.use(compression());
// app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
//For heroku deployment
if(process.env.NODE_ENV === 'production'){
    app.use(express.static("portfolio/build"));
}
app.use((req, res)=> {
    res.sendFile(path.join(__diirname, "./portfolio/build/index.html"))
});

app.get('/api',(req, res)=>{
    res.send('yo Homepage My G');
});

app.post('/api', (req, res)=> {
    
    const apiKey = process.env.API_KEY;
    sendGrid.setApiKey(apiKey); //could cause problems
    const msg = {
        to: 'nazar.kinash93@gmail.com',
        from: req.body.email,
        subject: req.body.name,
        text: req.body.message,
      };
     sendGrid.send(msg)
     .then(result=>{
        res.status(200).json({
            success: true
        });
     })
     .catch(err=>{
         console.log(err);
         res.status(401).json({
             success: false
         });
     });
});

app.listen(port,()=> {
    console.log('Listening on port 3030');
});



