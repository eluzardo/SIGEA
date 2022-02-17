//conexion a mysql

const mysql = require('mysql');
const conexionSQL = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'sigea',
});

//conexionSQL.connect();

conexionSQL.query(
  'SELECT 1 + 1 AS solution',
  function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  }
);

module.exports = {
  conexionSQL,
};

//conexion a mssql
/*require('dotenv').config();
const sql = require('mssql')
const { USER, PASSWORD, DATABASE, SERVER } = process.env

const sqlConfig = {
    user: USER,
    password: PASSWORD,
    database: DATABASE,
    server: SERVER,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
}


const conexionSQL = async function conectar() {
    try {
        const conexion = await sql.connect(sqlConfig)
        return conexion
    } catch (e) {
        console.log(e)
        throw new Error('Error')
    }



}

module.exports = {
    conexionSQL,
    sqlConfig
}*/
