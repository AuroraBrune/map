const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

// app.get("./api", (req, res) => {
//  const name = req.query.name || "World";
//  res.setHeader("Content-Type", "application/jaon");
//  res.send(JSON.stringify({greeting: `Hello ${name}!` }));
// });

// create a GET route
app.get('/express_backend', (req, res) => { 
 res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
}); 

app.listen(PORT, () => {
 console.log(`Listening on ${PORT}`);
});