const {sqlConfig} = require('../conexionBBDD')
const sql = require('mssql')

const agregarMateria = async (req,res) =>{
    console.log('aassdd')
    const pool = new sql.ConnectionPool(sqlConfig);
        const poolConnect = await pool.connect();
        const ps = await pool.request()
            .query("select * from materiasTMP")
        pool.close();
        res.json({"nombre":"$"})
        console.log(ps)
}

const mostrarMateria = async (req,res) =>{
    console.log('aassdd')
    const pool = new sql.ConnectionPool(sqlConfig);
        const poolConnect = await pool.connect();
        const ps = await pool.request()
            .query("select * from materiasTMP")
        pool.close();
        res.json({"nombre":"$"})
        console.log(ps)
}

const modificarMateria = async (req,res) =>{
    console.log('aassdd')
    const pool = new sql.ConnectionPool(sqlConfig);
        const poolConnect = await pool.connect();
        const ps = await pool.request()
            .query("select * from materiasTMP")
        pool.close();
        res.json({"nombre":"$"})
        console.log(ps)
}

const eliminarMateria = async (req,res) =>{
    console.log('aassdd')
    const pool = new sql.ConnectionPool(sqlConfig);
        const poolConnect = await pool.connect();
        const ps = await pool.request()
            .query("select * from materiasTMP")
        pool.close();
        res.json({"nombre":"$"})
        console.log(ps)
}



module.exports={
    agregarMateria,
    mostrarMateria,
    modificarMateria,
    eliminarMateria
}