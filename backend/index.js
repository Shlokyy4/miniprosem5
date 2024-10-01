
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const productController = require('./Controllers/productController');


const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');
const VendorRouter = require('./Routes/Vendorauth');

require('dotenv').config();
require('./Models/db');

const PORT = process.env.PORT || 8080;

// app.get('/ping', (req, res) => {
//     res.send('PONG');
// });

app.use(bodyParser.json());
app.use(cors());


app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);
app.use('/venauth',VendorRouter)
app.use('/api', productController);
app.use(express.json());
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})




// const express = require('express');
// const cors = require('cors');
// const productController = require('./productController');

// const app = express();
// const port = 8080;

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.static('public')); // Serve images

// // Routes
// app.use('/api', productController);

// app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
// });
