const express = require('express');
const path = require('path');


const mainRouter = require('./routes/main');
const productsRouter = require('./routes/products');
const userRouter = require('./routes/user');
const app = express();




app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/user', userRouter);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});