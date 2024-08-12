const jsonServer = require('json-server');
const fs = require('fs');
const path = require('path');

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const bikes = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'bikes.json')));
const bookings = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'bookings.json')));
const reviews = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'reviews.json')));

const router = jsonServer.router({ bikes, bookings, reviews });
server.use(middlewares);

server.use(jsonServer.bodyParser);

server.post('/payments', (req, res) => {
  res.status(200).json({ message: 'Payment processed successfully!' });
});


server.use(router);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
