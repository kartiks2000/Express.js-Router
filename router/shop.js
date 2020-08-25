const express = require('express');

const router = express.Router();

router.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/addproduct');
});

router.use('/addproduct',(req,res,next)=>{
    res.send("<form method='POST' action='/product'><input type='text' name='proname'><input type='submit' value='ADD'></form>");
});

module.exports = router;