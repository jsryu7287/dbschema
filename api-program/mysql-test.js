// Import mysql2 package
const mysql = require('mysql2');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',      // Database host (usually localhost for local testing)
  user: 'root',           // MySQL username (change this as per your setup)
  password: 'rootroot',   // MySQL password (change this as per your setup)
  database: '한빛무역'      // db1234567C  The database you want to connect to (change as needed)
});

// Connect to the MySQL database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the MySQL database as ID ' + connection.threadId);
});

// Run a simple query to test the connection
connection.query('SELECT 1 + 1 AS result', (err, results) => {
  if (err) {
    console.error('Error during query execution:', err.stack);
    return;
  }
  console.log('Query result: ', results[0].result); // Should output: 2
});

connection.query('SELECT * from 고객', (err, results) => {
    if (err) {
      console.error('Error during query execution:', err.stack);
      return;
    }
    console.log('Query result: ', results); // Should output: 2
  });
  
// Close the connection
connection.end();
