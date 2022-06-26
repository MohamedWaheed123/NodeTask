
const express=require('express');
const homeRouter=express.Router();

const debug=require('debug')('app:sessionRouter');
const {MongoClient,ObjectId}=require('mongodb');

homeRouter.route('/').get((req,res)=>{
   
            res.render('index')
            
       
  
});

  
module.exports=homeRouter;