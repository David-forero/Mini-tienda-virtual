const { Router } = require('express');
const router = Router();
const stripe = require('stripe')('sk_test_POfUBTEpX3vjc1oHRyD8q3Xv00i9UMxPT4');

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/checkout', async (req, res) =>{
    const customer = await stripe.customers.create({//los datos del cliente
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    });
    const charge = await stripe.charges.create({//almacene los datos
        amount: '5000',
        currency: 'usd',
        customer: customer.id,
        description: 'Software edicion de video'
    });
    console.log(charge.id);
    res.render("descarga");
});

module.exports = router;