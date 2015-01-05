var express = require('express');
var router = new express.Router();
var store = require('./store.js');
var bodyParser = require('body-parser');


var jsonParser = bodyParser.json();

//poor mans uuid, because this is just a demo
function generateUniqueId() {
   return Math.round(Math.random() * 100000000).toString(36);
}

router.get('/', function(req, res) {
   res.json({status:'ok'});
});

router.get('/address', function(req, res) {
   var data = store.getAll();
   res.json(data);
});

router.get('/address/:id', function(req, res) {
   var data = store.get(req.params.id);
   if(data) {
      res.json(data);
   } else {
      res.status(404);
      res.json({status:'not found'});
   }
});


//no error checking! no security!
/*
{
   firstname: "Bob",
   lastname: "Smith",
   email: "bob@gmail.com"
}
*/
router.post('/address', function(req, res) {
   var id = generateUniqueId();
   // console.log('body', req.body);
   req.body.pending = false;
   store.set(id, req.body);
   res.status(201);
   res.json({status:"ok", id:id})
});

router.put('/address/:id', function(req, res) {
   var id = req.params.id;

   if(store.get(id)) {
      store.set(id, req.body);
      res.json({status:'ok'});
   } else {
      res.send(400);
      res.json({status:'not found'});
   }
})


module.exports = router;