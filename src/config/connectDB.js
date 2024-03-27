const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '65.109.122.227',
    user: 'fcppyaam_win100nuser',
    password: 'Win100@P4radoxe$2024',
    database: 'fcppyaam_win100new'
});
   // "start": "pm2 start src/server.js"

export default connection;
