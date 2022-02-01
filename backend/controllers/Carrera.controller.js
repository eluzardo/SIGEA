const { conexionSQL } = require('../conexionBBDD');
const sql = require('mssql');

const agregarCarrera = async (req, res) => {
  const { nombre, codigo } = req.body;
  const conexion = await conexionSQL();
  const ps = await conexion
    .request()
    .input('nombre', sql.VarChar, nombre)
    .input('codigo', sql.VarChar, codigo)
    .query('insert into carreraTMP (nombre,codigo) values (@nombre, @codigo)');
  conexion.close();
  res.status(200).json({ msg: 'se inserto la carrera' });
};

const mostrarCarrera = async (req, res) => {
  const conexion = await conexionSQL();
  const ps = await conexion.request().query('select * from carreraTMP');
  conexion.close();
  res.json(ps.recordset);
};

const modificarCarrera = async (req, res) => {
  const { id, nombre, codigo, pPlanEstudio } = req.body;
  let query = 'update carreraTMP set ';
  let contadorParametros = 0;
  if (nombre != null) {
    query = query + 'nombre=@nombre';
    contadorParametros++;
  }
  if (codigo != null && contadorParametros > 0) {
    query = query + ',codigo=@codigo';
  } else if (codigo != null && contadorParametros < 1)
    query = query + 'codigo=@codigo';
  if (pPlanEstudio != null && contadorParametros > 0) {
    query = query + ',pPlanEstudio=@pPlanEstudio';
  } else if (pPlanEstudio != null && contadorParametros < 1)
    query = query + 'pPlanEstudio=@pPlanEstudio';
  query = query + ' where id=@id';
  const conexion = await conexionSQL();
  const ps = await conexion
    .request()
    .input('id', sql.Int, id)
    .input('nombre', sql.VarChar, nombre)
    .input('codigo', sql.VarChar, codigo)
    .input('pPlanEstudio', sql.Int, pPlanEstudio)
    .query(query);
  conexion.close();
  res.json(ps.recordset);
};

const eliminarCarrera = async (req, res) => {
  const { id } = req.body;
  const conexion = await conexionSQL();
  const ps = await conexion
    .request()
    .input('id', sql.Int, id)
    .query('delete from carreraTMP where id= @id');
  conexion.close();
  res.json(ps.recordset);
};

module.exports = {
  agregarCarrera,
  mostrarCarrera,
  modificarCarrera,
  eliminarCarrera,
};
