

const express = require('express');


const mongoose = require('mongoose');

const item = require('../models/mydata');

const router = express.Router();


router.post('/add',async(req,res)=>{
       console.log(req.file);
    const item1 = new item({
         username : req.body.username,
         appname : req.body.appname,
         templname: req.body.templname,
         userid : req.body.userid,
         chatid: req.body.chatid,
   });

try {
   const a1= await item1.save();
   res.json(a1);

}catch(err){

res.send('error');
}

});


module.exports = router;
