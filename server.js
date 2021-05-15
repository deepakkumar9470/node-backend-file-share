require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path')
const PORT = process.env.PORT || 5000
const cors = require('cors');
const bodyParser = require('body-parser');
// Connecting to database
const connectDB = require('./config/db');

// Serve static files
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'));
app.use(bodyParser.json());


// Cors access to access http req from origin
const corsOptions = {
    origin : process.env.ALLOWED_ORIGIN.split(',')
};

app.use(cors(corsOptions));


// Template engine 
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

// Importing Routes
const fileRouter = require('./routes/files');
const showRouter = require('./routes/show');
const downloadRouter = require('./routes/download')

// Routes
app.use('/api/files', fileRouter);
app.use('/files', showRouter);
app.use('/files/download', downloadRouter);

app.get('/', (req, res)=>{
    res.send('<h1>Nodejs file sharing....</h1>')
})
connectDB()


app.listen(PORT, ()=>{
    console.log(`Server started at port ${PORT}`);
})
