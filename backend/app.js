const express = require('express');

const app = express();

app.get('/', (req,res)=> {res.status(202).json({message: 'sigur ca da'})});

app.listen(8086, ()=> console.log('Server start at port 8086'))