// const {loadDB}= require('../../loadDB');
// loadDB();
// const {Country}= require('../../db');
const {getAllCountries,
       getCountryByID,
       getCountryByName} = require('../controllers/controllerCountry')



const getCountriesHandler= async (req,res)=>{
    const {name} = req.query;
    const countries= await getAllCountries();
    try{
        if(name){
            const country= await getCountryByName(name);
            (country.length)?
            res.status(200).json(country)
            :res.status(200).send("not found");    
        }else res.status(200).json(countries);   
        
    }catch(error){
        res.status(404).send(error.message)
    }
}
const getCountryHandler= async(req,res)=>{
    const {id} = req.params;
    try{
    const country = await getCountryByID(id);
    // console.log(country)
    res.status(200).json(country);
    }catch(error){
        res.send(error.message);
    }
}

module.exports={getCountriesHandler,getCountryHandler}