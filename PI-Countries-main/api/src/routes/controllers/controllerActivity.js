const {Activity,Country}= require('../../db');


const getAllActivities = async ()=>
   await Activity.findAll({
      include: {
         model: Country,
         attributes: ['name', 'continent'],
         through: {
             attributes: []
         }
     }
   });

const createActivity =async( name,difficulty,duration,season,CountryId)=> {

   const activity= await Activity.create( {name,difficulty,duration,season});
   await activity.addCountry(CountryId);
   return activity;
}
module.exports = {
    getAllActivities,
    createActivity
}