import React from 'react';

const FilaTablaCarreras = ({ el, setDataToEdit, deleteCarrera }) => {
  let { id, nombre, codigo } = el;

  return (
    <tr>
      <td>{nombre}</td>
      <td>{codigo}</td>
      <td>
        <button onClick={() => setDataToEdit(el)} className="btn btn-warning">
          Editar
        </button>
      </td>
      <td>
        <button onClick={() => deleteCarrera(id)} className="btn btn-danger">
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default FilaTablaCarreras;
