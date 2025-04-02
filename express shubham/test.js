const express = require('express');
const path = require('path'); // Import the 'path' module
const app = express();

// Serve the about.html file when the /about route is accessed
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/about.html')); // Use path.join to create the full path
});

app.get('/home',(req,res)=>{
    res.send("This is home page")
})
app.get('/image', (req, res) => {
    res.send(`
      <h1>This is the home page</h1>
      <img src="https://wallpaperaccess.com/full/11222356.jpg" alt="Placeholder Image">
    `);
  });
  

app.get('/', (req, res) => {
  res.send("shubham bhai ");
});

// Optionally serve static files from the 'public' directory.
// app.use(express.static('public'));

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});



