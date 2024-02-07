const express=require('express');
const bodyParser=require('body-parser');
const morgan=require('morgan');
const cors=require('cors');
const app=express();

const {PORT}=require('./config/serverConfig');

const setServerAndRun=async()=>{

  app.listen(PORT,()=>{
    console.log(`server running at ${PORT}`);
  })

}

setServerAndRun();