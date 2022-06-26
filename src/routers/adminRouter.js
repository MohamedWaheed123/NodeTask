const express=require('express');
const adminRouter=express.Router();
const debug=require('debug')('app:adminRouter');
const {MongoClient}=require('mongodb');
const sessions=require('../data/sessions.json');
const products=require('../data/products.json');



adminRouter.route('/').get((req,res)=>{
    const url='mongodb+srv://mohamedwaheed:XOf5cHTYeNPIQidx@globomantics.lota4m8.mongodb.net/?retryWrites=true&w=majority';
const dbName='globomantics';
(async function mongo(){
    let client;
    try {
        client=await MongoClient.connect(url);

        const db =client.db(dbName);

        const response=await db.collection('products').insertMany(products);
        res.json(response);
        
    } catch (error) {
        console.log(error.stack);
        
    }
    client.close()
}())
});
module.exports=adminRouter;