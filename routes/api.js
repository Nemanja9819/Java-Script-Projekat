const { sequelize, Hrana, Pice,User, Stolovi } = require('../models');
const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const route = express.Router();
route.use(express.json());
route.use(express.urlencoded({ extended: true }));


function authToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
  
    if (token == null) return res.status(401).json({ msg : "Greska"});
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    
        if (err) return res.status(403).json({ msg: err });
    
        req.user = user;
    
        next();
    });
}

 // route.use(authToken);


route.get('/hrana', (req, res) => {

    Hrana.findAll()
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
    
});

route.get('/hrana/:id', (req, res) => {

    Hrana.findOne({ where: { id: req.params.id } })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );

});

route.post('/hrana', (req, res) => {
    
    Hrana.create({ ime: req.body.ime, sastojci: req.body.sastojci, cena: req.body.cena})
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );

});

route.put('/hrana/:id', (req, res) => {
    
    Hrana.findOne({ where: { id: req.params.id } })
        .then( hr => {
            hr.ime = req.body.ime;
            hr.sastojci = req.body.sastojci;
            hr.cena = req.body.cena;

            hr.save()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );

});

route.delete('/hrana/:id', (req, res) => {

    Hrana.findOne({ where: { id: req.params.id } })
        .then( hr => {
            hr.destroy()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );
});

 route.get('/pice', (req, res) => {

    Pice.findAll()
     .then( rows => res.json(rows) )
     .catch( err => res.status(500).json(err) );
 
    
});

route.get('/pice/:id', (req, res) => {

    Pice.findOne({ where: { id: req.params.id } })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );

});

route.post('/pice', (req, res) => {

    Pice.create({ ime: req.body.ime, cena: req.body.cena })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );

});

route.put('/pice/:id', (req, res) => {
    
    Pice.findOne({ where: { id: req.params.id } })
        .then( drink => {
            drink.ime = req.body.ime;
            drink.cena = req.body.cena;

            drink.save()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );

});

route.delete('/pice/:id', (req, res) => {

    Pice.findOne({ where: { id: req.params.id }})
        .then( drink => {
            drink.destroy()
                .then( rows => res.json(rows) )
                .catch( err => res.status(500).json(err) );
        })
        .catch( err => res.status(500).json(err) );
});

route.get('/stolovi', (req, res) => {

    Stolovi.findAll()
    .then( rows => res.json(rows) )
    .catch( err => res.status(500).json(err) );

   
});

route.get('/stolovi/:id', (req, res) => {

    Stolovi.findOne({ where: { id: req.params.id } })
       .then( rows => res.json(rows) )
       .catch( err => res.status(500).json(err) );

});

route.post('/stolovi', (req, res) => {

    Stolovi.create({ stolice: req.body.stolice })
       .then( rows => res.json(rows) )
       .catch( err => res.status(500).json(err) );

});

route.put('/stolovi/:id', (req, res) => {
   
    Stolovi.findOne({ where: { id: req.params.id } })
       .then( table => {
           table.stolice = req.body.stolice;

           table.save()
               .then( rows => res.json(rows) )
               .catch( err => res.status(500).json(err) );
       })
       .catch( err => res.status(500).json(err) );

});

route.delete('/stolovi/:id', (req, res) => {

    Stolovi.findOne({ where: { id: req.params.id }})
       .then( table => {
           table.destroy()
               .then( rows => res.json(rows) )
               .catch( err => res.status(500).json(err) );
       })
       .catch( err => res.status(500).json(err) );
});


module.exports = route;