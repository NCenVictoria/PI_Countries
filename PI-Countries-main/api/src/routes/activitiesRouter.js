const activitiesRouter=require('express').Router();
const {getActivitiesHandler,createActivityHandler}= require('./handlers/activitieshandler');

activitiesRouter
   .get('/',getActivitiesHandler)
   .post('/',createActivityHandler);



module.exports= activitiesRouter;