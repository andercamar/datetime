const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");
const dateRoutes = require('./src/routes/dateRoutes.js');
dotenv.config();

const app = express();

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

const PORT =process.env.PORT;

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(cors(corsOptions));
app.use(express.json());
app.use('/date',dateRoutes);

app.listen(PORT, console.log("Server iniciado na porta: " + PORT));