import mysql2 from 'mysql2';

const connection = mysql2.createConnection({
    host: 'database-1.crvor1i9h3qs.us-east-1.rds.amazonaws.com',
    user: 'root',
    password: 'Shefali98',
    database: 'master'
});

connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });

  export default connection;