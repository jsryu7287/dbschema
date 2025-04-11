// Import required packages
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

// Create an Express app
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',      // Your MySQL host
  user: 'root',           // Your MySQL user
  password: 'rootroot',   // Your MySQL password
  database: '한빛무역'      // db1234567C Your database name
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL as ID ' + connection.threadId);
});

// 1. Get all tutorials
app.get('/tutorials', (req, res) => {
  connection.query('SELECT * FROM tutorials', (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching tutorials' });
    }
    res.json(results);
  });
});

// 2. Get a single tutorial by ID
app.get('/tutorials/:id', (req, res) => {
  const { id } = req.params;
  connection.query('SELECT * FROM tutorials WHERE id = ?', [id], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching tutorial' });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Tutorial not found' });
    }
    res.json(results[0]);
  });
});

// 3. Create a new tutorial
app.post('/tutorials', (req, res) => {
  const { title, description, published } = req.body;
  const query = 'INSERT INTO tutorials (title, description, published) VALUES (?, ?, ?)';
  connection.query(query, [title, description, published], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error creating tutorial' });
    }
    res.status(201).json({
      id: results.insertId,
      title,
      description,
      published,
    });
  });
});

// 4. Update a tutorial by ID
app.put('/tutorials/:id', (req, res) => {
  const { id } = req.params;
  console.log(id);
  console.log(req.body);

  // res.send('updated action');

  const { title, description, published } = req.body;
  console.log(id, title, description, published);

  const query = 'UPDATE tutorials SET title = ?, description = ?, published = ? WHERE id = ?';
  connection.query(query, [title, description, published, id], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error updating tutorial' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Tutorial not found' });
    }
    res.json({
      id,
      title,
      description,
      published,
    });
  });
});

// 5. Delete a tutorial by ID
app.delete('/tutorials/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM tutorials WHERE id = ?', [id], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error deleting tutorial' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Tutorial not found' });
    }
    res.json({ message: 'Tutorial deleted successfully' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

