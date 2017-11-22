const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
require('./db/mongoose');
const mongoose = require('mongoose');
const {Product} = require('./models/product');

app.use(express.static(__dirname));

app.get('/getlist', (req, res)=>{
	Product.find({}, (err, p)=>{
		res.send(p);
	});
});

app.get('/delete', (req, res)=>{
	const {id} = req.query;
	Product.findOneAndRemove({id}, (err, r)=>{
		Product.find({}, (err, p)=>{
			res.send(p);
		});
	});
});

app.get('/addproduct', (req, res)=>{
	const {id, name, amount, price} = req.query;
	new Product({id, name, amount, price}).save((err, r)=>{
		res.send(r);
	})
});

app.get('/dropdb', (req, res)=>{
	mongoose.connection.db.dropDatabase(()=>{
		res.send('database has been dropped');
	});
});

app.get('/updateproduct', (req, res)=>{
	const {id, name, amount, price} = req.query;
	Product.findOneAndUpdate({id}, {$set:{name, amount, price}}, (err, r)=>{
		Product.find({}, (err, p)=>{
			res.send(p);
		});
	});
})

app.get('*', (req, res)=>{
	res.sendFile(path.resolve(__dirname, 'index.html'))
});

app.listen(port);
