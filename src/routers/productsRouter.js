
const express=require('express');
const sessionRouter=express.Router();
const sessions=require('../data/sessions.json')
const products=require('../data/products.json')
const debug=require('debug')('app:sessionRouter');
const {MongoClient,ObjectId}=require('mongodb');

sessionRouter.route('/').get((req,res)=>{
    const url='mongodb+srv://mohamedwaheed:XOf5cHTYeNPIQidx@globomantics.lota4m8.mongodb.net/?retryWrites=true&w=majority';
    const dbName='globomantics';
    (async function mongo(){
        let client;
        try {
            client=await MongoClient.connect(url);
    
            const db =client.db(dbName);
    
            const products=await db.collection('products').find().toArray();
            res.render('Products',{products})
            
        } catch (error) {
            console.log(error.stack);
            
        }
        client.close()
    }())
  
});
sessionRouter.route('/:id').get((req,res)=>{
    const id=req.params.id;
    const url='mongodb+srv://mohamedwaheed:XOf5cHTYeNPIQidx@globomantics.lota4m8.mongodb.net/?retryWrites=true&w=majority';
    const dbName='globomantics';
    (async function mongo(){
        let client;
        try {
            client=await MongoClient.connect(url);
    
            const db =client.db(dbName);
    
            const product=await db.collection('products').findOne({_id:new ObjectId(id)});
            console.log(product);
            res.render('detailedProduct',{product:product})
            
        } catch (error) {
            console.log(error.stack);
            
        }
        client.close()
    }())
   
  
});

module.exports=sessionRouter;