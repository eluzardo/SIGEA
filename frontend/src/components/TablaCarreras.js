import React from 'react';
import FilaTablaCarreras from './FilaTablaCarreras';

const TablaCarreras = ({ db, setDataToEdit, deleteCarrera }) => {
  console.log(db);

  return (
    <div>
      <button /*onClick={handleRefresh}*/ className="btn btn-secondary mb-3">
        Actualizar
      </button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Carrera</th>
            <th scope="col">Código</th>
          </tr>
        </thead>
        <tbody>
          {db.length === 0 ? (
            <tr>
              <td>Sin datos</td>
            </tr>
          ) : (
            db.map((el) => (
              <FilaTablaCarreras
                key={el.id}
                el={el}
                setDataToEdit={setDataToEdit}
                deleteCarrera={deleteCarrera}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
export default TablaCarreras;
