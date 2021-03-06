const express = require('express');
const { sequelize, User } = require('./models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();

const app = express();

var corsOptions = {
    origin: 'http://127.0.0.1:8000',
    optionsSuccessStatus: 200
}

app.use(express.json());
app.use(cors(corsOptions));


app.post('/register', (req, res) => {

    const obj = {
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10),
        admin: req.body.admin
    };

    User.create(obj).then( rows => {
        
        const usr = {
            userId: rows.id,
            username: rows.username
        };

        const token = jwt.sign(usr, process.env.ACCESS_TOKEN_SECRET);
    
        res.json({ token: token });

    }).catch( err => res.status(500).json(err) );
});

app.post('/login', (req, res) => {

    User.findOne({ where: { username: req.body.username } })
        .then( usr => {

            if (bcrypt.compareSync(req.body.password, usr.password)) {
            const tmp = {
            userId: usr.id,
            username: usr.username
             };

            const token = jwt.sign(tmp, process.env.ACCESS_TOKEN_SECRET);

            res.json({ token: token });
            } else {
                res.status(400).json({ msg: "Invalid credentials"});
            }
        })
        .catch( err => res.status(500).json(err) );
});

app.listen({ port: 9000 }, async () => {
    await sequelize.authenticate();
});