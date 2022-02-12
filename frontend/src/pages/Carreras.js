import React, { useState } from 'react';
import FormCarrera from '../components/FormCarrera';
import TablaCarreras from '../components/TablaCarreras';

const fetchOptions = {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
};

//const lala = async () => {
//  try {
//    await fetch('http://localhost:5000/api/carreras/mostrar-carreras').then(
//      (res) => res.json()
//    );
//  } catch (error) {
//    console.log(error);
//  }
//};

const initialDb = () => {
  try {
    fetch('http://localhost:5000/api/carreras/mostrar-carreras').then((res) =>
      res.json().then((res) => {
        console.log(res.length);
      })
    );
  } catch (error) {
    console.log(error);
  }
};

const Carreras = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const insertCarrera = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  };

  const updateCarrera = (data) => {};

  const deleteCarrera = (id) => {};

  return (
    <div>
      <FormCarrera
        insertCarrera={insertCarrera}
        updateCarrera={updateCarrera}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <TablaCarreras
        el={db}
        setDataToEdit={setDataToEdit}
        deleteCarrera={deleteCarrera}
      />
    </div>
  );
};

export default Carreras;
