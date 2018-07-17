

var express  = require('express');
var app  = express(); 
var router = express.Router();                         
var morgan = require('morgan');            
var bodyParser = require('body-parser');    
var cors = require('cors');
var stripe = require('stripe')('sk_test_EKFbrjuYthyOn2on7uWQTdGJ');
 
app.use(morgan('dev'));                                        
app.use(bodyParser.urlencoded({'extended':'false'}));            
app.use(bodyParser.json());                                     
app.use(cors());
 
/*app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}); */

app.use((req, res, next)=>{
  res.header("Access-Control-Allow-Origin", "*");
res.header('Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, mimeType, Accept, Authorization');
if (req.method === 'OPTIONS'){
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET,OPTIONS')
    return res.status(202).json({});
}
next();
}); 
 
app.use(express.static('www'));

app.post('/processpay', function(request, response){
  var stripetoken = request.body.stripetoken;
  var amount = request.body.amount;
  var charge = stripe.charge.create({
    amount: amountpayable,
    currency: 'usd',
    description: 'simple test',
    source: stripetoken
  }, function(err, charge){
    if(err)
    console.log(err)
    else
    response.status(200).json({
      resultat: 'succés'
    })
  })
})

app.post('/payer', function(request, response){
  
    console.log('salut')
    console.log(request.body);
    console.log(request.body.source.id);
    var amount = 100000;
    var stripetoken = request.body.source.id;
    var charge = stripe.charges.create({
      amount: amount,
      currency: 'usd',
      description: 'simple test',
      source: stripetoken
    }, function(err, charge){
      if(err)
      console.log(err)
      else
      response.status(200).json({
        resultat: 'succés',
        message: 'WE HAVE RECEIVED YOUR PAIEMENT AND THE CONFIRMATION WILL BE SEND TO YOU BY E-MAIL.',
        message2: 'THANK YOU!'
      })
    })
   /* response.status(200).json({
      message: 'WE HAVE RECEIVED YOUR PAIEMENT AND THE CONFIRMATION WILL BE SEND TO YOU BY E-MAIL.',
      message2: 'THANK YOU!'
    }) */
  }) 
  
app.get('/payer', function(request, response){
/* var stripetoken = req.body.stripetoken;
  var amount = req.body.amount;
  var charge = stripe.charge.create({
    amount: amountpayable,
    currency: 'usd',
    description: 'simple test',
    source: stripetoken
  }, function(err, charge){
    if(err)
    console.log(err)
    else
    res.status(200).json({
      resultat: 'succés'
    })
  }) */
  console.log('salut')
  console.log(request.body);
}) 


//app.use(router);
app.set('port', process.env.PORT || 5000);
/*app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
}); */

module.exports = app;
