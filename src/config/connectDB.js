const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '65.109.122.227',
    user: 'fcppyaam_malaysian',
    password: '66666699663@$',
    database: 'fcppyaam_malaysia'
});
   // "start": "pm2 start src/server.js"

export default connection;
