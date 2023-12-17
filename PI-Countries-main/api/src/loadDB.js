const axios = require ('axios');
const {Country}= require ('./db');

const loadDB=async()=>{
    try{
      const dataApi = await axios.get('https://restcountries.com/v3.1/all')
      // console.log(dataApi.data)
      const loadInfo = await dataApi.data.map(e=>{
        return{
          id: e.cca3,
          name: e.name.official,
          image: e.flags.png,
          continent: e.region,
          capital: e.capital ? e.capital[0] : 'Not found',
          subregion: e.subregion ? e.subregion : 'Not found',
          area: e.area,
          population: e.population,
        }
      })
      // console.log(loadInfo)
      const countriesDB = await Country.bulkCreate(loadInfo)

      console.log('DB success')

      
      
      return countriesDB;
    }catch(error){
       throw new Error;
    }
}

loadDB();


module.exports= {loadDB}