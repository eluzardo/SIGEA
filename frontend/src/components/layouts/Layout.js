import Navegacion from '../Navegacion';

// con children trae todos los componentes que tenga adentro en el approuter
export default function Layout({ children }) {
  return (
    <div>
      <Navegacion />
      {children}
    </div>
  );
}
