const axios = require ('axios');
const {Country}= require ('./db');

const loadDB=async()=>{
    try{
      const dataApi = await axios.get('https://rest-countries.up.railway.app/v2/all')
      // console.log(dataApi.data)
      const loadInfo = await dataApi.data.map(e=>{
        return{
          id: e.alpha3Code,
          name: e.name,
          image: e.flags.png,
          continent: e.region,
          capital: e.capital ? e.capital : 'Not found',
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