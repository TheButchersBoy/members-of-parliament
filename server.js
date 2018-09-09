const express = require('express');

const app = express();
const port = process.env.PORT || 5000;
let count = 0;
var MongoClient = require('mongodb').MongoClient

// MongoClient.connect('mongodb://TheButchersBoy:test123@ds243812.mlab.com:43812/dbcool', function (err, db) {
//   if (err) throw err
  
//   db.collection('lab').find().toArray(function (err, result) {
//     if (err) throw err

//     console.log(result)
// 	// TODO: set count
//   })
// })

app.get('/api/getCount', (req, res) => {
	res.send({ express: count });
});

app.post('/api/updateCount', (req, res) => {
	count++;	
	res.send({ express: count });
});

app.listen(port, () => console.log(`Listening on port ${port}`));