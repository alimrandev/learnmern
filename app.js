const express = require('express');
const app = express();

app.use(express.json());



//default routs

// app.use('/', (req, res)=> {
//     console.log(`server response at ${new Date()}`);
//     // console.dir(req);
//     res.send(`Server Respond ${new Date()}`)
// })





module.exports = app;