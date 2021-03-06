const {conexionSQL} = require('../conexionBBDD')
const sql = require('mssql')


const agregarMateria = async (req,res) =>{
    const {nombre,codigo} = req.body
    const conexion = await conexionSQL();
    const ps= await conexion
                    .request()
                    .input("nombre", sql.VarChar, nombre)
                    .input("codigo", sql.VarChar, codigo)
                    .query("insert into materiasTMP (nombre,codigo) values (@nombre, @codigo)")       
    conexion.close();
    res.json(ps.recordset)
    
}

const mostrarMateria = async (req,res) =>{
    const conexion = await conexionSQL();
    const ps= await conexion
                    .request()
                    .query("select * from materiasTMP")       
    conexion.close();
    res.json(ps.recordset)
}

const modificarMateria = async (req,res) =>{
    const {id, nombre, codigo} = req.body
    let query = "update materiasTMP set "
    let contadorParametros = 0;
    if (nombre != null){
        query = query + "nombre=@nombre"
        contadorParametros++;
    }
    if (codigo != null && contadorParametros>0){
        query = query + ",codigo=@codigo"
    }else if(codigo != null && contadorParametros<1) query = query + "codigo=@codigo"
    query = query + " where id=@id"
    const conexion = await conexionSQL();
    const ps= await conexion
                    .request()
                    .input("id", sql.Int, id)
                    .input("nombre", sql.VarChar, nombre)
                    .input("codigo", sql.VarChar, codigo)
                    .query(query)       
    conexion.close();
    res.json(ps.recordset)
}

const eliminarMateria = async (req,res) =>{
    const {id} = req.body
    const conexion = await conexionSQL();
    const ps= await conexion
                    .request()
                    .input("id", sql.Int, id)
                    .query("delete from materiasTMP where id= @id")       
    conexion.close();
    res.json(ps.recordset)
}



module.exports={
    agregarMateria,
    mostrarMateria,
    modificarMateria,
    eliminarMateria
}