 const express = require('express');

 const router = express.Router();

 console.log(process.env.NODE_TESTE)
 
 router.get('/api', (req, res) => {
   res.status(200).send({
     success: 'true',
     message: 'Seja bem-vindo(a)!',
     version: '1.0.0',
   });
 });
 
 module.exports = router;