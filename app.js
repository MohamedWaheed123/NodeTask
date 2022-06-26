const express=require('express');
const app=express();
const chalk = require('chalk');
const debug=require('debug')('app');
const morgan=require('morgan');
const path=require('path');
const PORT=process.env.PORT || 3000;
const productsRouter=require('./src/routers/productsRouter');
const adminRouter=require('./src/routers/adminRouter');
const authRouter=require('./src/routers/authRouter');
const homeRouter=require('./src/routers/homeRouter');


app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname,'/public/')))
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.get('/',(req,res)=>{

    res.render('index',{title:'ejs',data:['a','b','c']});
});

app.use('/Products',productsRouter);
app.use('/Home',homeRouter);

app.use('/admin',adminRouter);
app.use('/auth',authRouter);

app.set('views','./src/views');
app.set('view engine','ejs');
app.listen(PORT,()=>{
    console.log(`listening on port ${chalk.green(PORT)}`);
})