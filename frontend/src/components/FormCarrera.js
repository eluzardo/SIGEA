import { React, useState, useEffect } from 'react';
//import TablaCarreras from '../components/TablaCarreras';

const initialState = {
  id: null,
  nombre: '',
  codigo: '',
};

const FormCarrera = ({
  insertCarrera,
  updateCarrera,
  setDataToEdit,
  dataToEdit,
}) => {
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialState);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  //let fetchOptions = {
  //  method: 'POST',
  //  headers: {
  //    'Content-type': 'application/json',
  //  },
  //  body: JSON.stringify({
  //    nombre: form.nombreCarrera,
  //    codigo: form.codigoCarrera,
  //  }),
  //};

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (form.id === null) {
    //   insertCarrera(form);
    // } else {
    //   updateCarrera(form);
    // }

    //try {
    //  fetch(
    //    'http://localhost:5000/api/carreras/agregar-carreras',
    //    fetchOptions
    //  ).then((res) => res.json().then((res) => console.log(res)));
    //} catch (error) {
    //  console.log(error);
    //}

    handleReset();
  };

  const handleReset = () => {
    setForm(initialState);
    setDataToEdit(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className="row g-5">
          <div className="col-auto">
            <label name="nombreCarrera" className="form-label">
              Nombre carrera:
            </label>
          </div>
          <div className="col-auto">
            <input
              type="text"
              className="form-control"
              name="nombre"
              placeholder="name@example.com"
              onChange={handleChange}
              value={form.nombre}
            />
          </div>
        </div>
        <div className="row g-5">
          <div className="col-auto">
            <label name="codigoCarrera" className="form-label">
              Código carrera:
            </label>
          </div>
          <div className="col-auto">
            <input
              type="text"
              className="form-control"
              name="codigo"
              placeholder="Ej.: K"
              onChange={handleChange}
              value={form.codigo}
            />
          </div>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Agregar carrera
          </button>
          <input type="reset" value="Limpiar" onClick={handleReset} />
        </div>
      </div>
    </form>
  );
};

export default FormCarrera;
