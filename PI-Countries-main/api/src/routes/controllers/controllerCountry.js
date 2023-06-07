const {Country,Activity}= require('../../db');
const {loadDB}= require('../../loadDB');
// loadDB();

const allCountries = async ()=> await Country.findAll({
    include: {
        model: Activity,
        attributes: ['name', 'difficulty', 'duration', 'season'],
        through: {
            attributes: []
        }
    }
    

});

const getAllCountries = async()=>{
   return  await allCountries();
}

const getCountryByName = async (name)=>{
    const countries = await allCountries();//importante await por eso no funcionaba 
    const country = await countries
        .filter(el => el.name
        .toLowerCase()
        .includes(name.toLowerCase()));

    return country;
}
const getCountryByID = async(id)=>{
    // const countries = await allCountries();
    const country= await Country.findByPk(id,{include: {
        model: Activity,
        attributes: ['name', 'difficulty', 'duration', 'season'],
        through: {
            attributes: []
        }
    }
})
    // const country = await countries
    //     .filter(el => el.id.includes(id))
        // console.log(country[0].dataValues)
    return country;
}

module.exports = {
    getAllCountries,
    getCountryByName,
    getCountryByID
}