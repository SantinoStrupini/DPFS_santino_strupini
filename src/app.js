require('dotenv').config();

const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authUser = require('./middlewares/authUser');

const mainRouter = require('./routes/main');
const productsRouter = require('./routes/products');
const userRouter = require('./routes/user');
const userApiRouter = require('./routes/api/userApi');
const productsApiRouter = require('./routes/api/productsApi');

const app = express();




app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cors());


app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(authUser);
app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/user', userRouter);
app.use('/userApi', userApiRouter);
app.use('/productsApi', productsApiRouter)


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});