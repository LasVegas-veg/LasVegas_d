const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());


const products = [
   { 
       id: 1,    
       name: 'phone',
       price: 3000,   
},
{
    id: 2,    
    name: 'tablet',
    price: 701,  
},
];

app.get('/products', (req, res) => res.json(products));
app.post('/products', (req, res) => {
    products.push(req.body);
    req.json(req.body);
});

app.listen(3000, () => console.log('Listening on port 3000'));