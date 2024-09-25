const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
// CORS configuration for backend API access
const corsOptions = {
  origin: ['http://localhost:3001', 'https://dreamhome-1d9852268c2c.herokuapp.com/'],  // Adjust this for frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};
app.use(cors(corsOptions));app.use(express.static(path.join(__dirname, '../client/dist')));

// Get JSON file for property listings
app.get('/listings', (req, res) => {
    fs.readFile(path.join(__dirname, 'listings.json'), 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading listings.json:', err);
            return res.status(500).send('Error reading file.');
        }
        try {
            const properties = JSON.parse(data);
            res.json(properties);
        } catch (parseErr) {
            console.error('Error parsing JSON:', parseErr);
            return res.status(500).send('Error parsing JSON.');
        }
    });
});

// Load the properties from JSON file
const properties = require('../server/listings.json');
// Route to get property by ID
app.get('/listings/:id', (req, res) => {
  const propertyId = req.params.id;
  let property = properties.dreamhomes.find(p => p.id === propertyId);
  if (!property) {
    property = properties.recommended.find(p => p.id === propertyId);
  }  
  if (property) {
    res.json(property);
  } else {
    res.status(404).json({ message: 'Property not found' });
  }
});

// Catch-all route to serve the frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
