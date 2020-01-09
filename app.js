const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sendGrid = require('@sendgrid/mail');
const nodemon = require('nodemon');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('/api',(req, res)=>{
    res.send('yo Homepage My G');
});

app.post('/api', (req, res)=> {
    const apiKey = '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';
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
    console.log('Listening on port 3000');
});



