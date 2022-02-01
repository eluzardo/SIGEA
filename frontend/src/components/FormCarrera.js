import { useState } from 'react';

export const FormCarrera = () => {
  const initialState = {
    nombreCarrera: '',
    codigoCarrera: '',
  };

  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  let fetchOptions = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      nombre: form.nombreCarrera,
      codigo: form.codigoCarrera,
    }),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      fetch(
        'http://localhost:5000/api/carreras/agregar-carreras',
        fetchOptions
      ).then((res) => res.json().then((res) => console.log(res)));
    } catch (error) {
      console.log(error);
    }
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
              name="nombreCarrera"
              placeholder="name@example.com"
              onChange={handleChange}
              value={form.nombreCarrera}
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
              name="codigoCarrera"
              placeholder="Ej.: K"
              onChange={handleChange}
              value={form.codigoCarrera}
            />
          </div>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Agregar carrera
          </button>
        </div>
      </div>
    </form>
  );
};
