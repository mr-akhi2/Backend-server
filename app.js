const express=require("express");
require("dotenv").config();
 const app=express();
 const router=require("./routes/router");
  const cors=require('cors')


 const PORT=process.env.Port || 8080;

 app.use(express.json())
 app.use(cors());
  app.use(router);


 app.listen(PORT,()=>{
    console.log(`server is running http://localhost${PORT}`);
 })