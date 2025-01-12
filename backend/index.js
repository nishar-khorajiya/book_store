const mongoose = require('mongoose');
 const cors = require('cors');
const express = require('express');
const bookRoutes = require('./routes/bookRoutes.js');
require('dotenv').config();
const morgan =require('morgan')

const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));
 app.use(cors());

// DataBase Connection

mongoose.connect(process.env.MONGO_MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.error(err));

// Route
app.use('/books', bookRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running...`));
