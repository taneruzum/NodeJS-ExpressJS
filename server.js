const express = require('express');
const errorHandler = require('./middleware/errorhandler');
const connectDb = require('./config/dbConnection');
const dotenv = require('dotenv').config()

connectDb()
const app = express()
const port = process.env.PORT || 5000;
//Belirli bir port verilmediyse default olarak 5000 de çalışır.

/** app.get('/api/contacts', (req, res) => {
    //res.send('Get all contactss.')
    //res.json({ message: 'Get all contactss.' })
    res.status(200).json({ message: 'Get all contactss.' })
})*/
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"))
app.use("/api/users", require("./routes/userRoutes"))
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server running on this port | ${port} `);
})