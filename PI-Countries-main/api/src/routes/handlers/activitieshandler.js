const {getAllActivities,createActivity}= require('../controllers/controllerActivity');

const getActivitiesHandler= async(req,res)=>{
    try {
        const allActivities = await getAllActivities();
        (allActivities.length)?
        res.status(200).json(allActivities)
        :res.send('no activities')
    } catch (error) {
        res.status(200).send(error.message);
    }
}
const createActivityHandler= async(req,res)=>{
    try {
        const {
            
            name,
            difficulty,
            duration,
            season,
            CountryId
                      } = req.body;
        const newActivity = await createActivity(name,difficulty,duration,season,CountryId);
        console.log(newActivity);
        res.status(200).send('created')
    } catch (error) {
        res.status(200).send({error:error.message});
    }
}



module.exports={getActivitiesHandler,createActivityHandler}