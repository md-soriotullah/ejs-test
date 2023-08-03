import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';

// init express
const app = express();

// environment veriable
dotenv.config();
const port = process.env.PORT || 4040 ;

// data manage
app.use(express.urlencoded( {extended : true} ));
app.use(express.json());

// set view engine
app.set('view engine', 'ejs')

// diclare a let vriable
let pLanguages = [];

// create static route
app.use(express.static('public'));

// server get
app.get('/', (req, res) => {
    res.render('index', {plNames : pLanguages})
});
app.get('/contact', (req, res) => {
    res.render('contact', {})
});

// post form data
app.post('/', (req, res) => {
    const pLanguage = req.body.programming;
    pLanguages.push(pLanguage)
    res.redirect('/')
    console.log(pLanguage);
});

// server listen
app.listen(port, () => {
    console.log(`Server is running on port ${port}`.bgGreen.black);
});