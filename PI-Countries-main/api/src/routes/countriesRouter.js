const countriesRouter=require('express').Router();
const {getCountriesHandler,getCountryHandler} = require('./handlers/countriesHandler');



countriesRouter
    .get('/',getCountriesHandler)
    .get('/:id',getCountryHandler);

module.exports= countriesRouter;