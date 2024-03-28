const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '37.27.108.55',
    user: 'fcppyaam_malaysian',
    password: 'Wingo@Admin$',
    database: 'fcppyaam_malaysia'
});
   // "start": "pm2 start src/server.js"

export default connection;
