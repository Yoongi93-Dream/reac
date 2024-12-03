import './Pr.css';

export default function Pr(props) {
  return (
    <div className="contenedor">

      {/* Título centrado */}
      <h1 className="titulo">PAGINA DE JHOSELIN TICONA</h1>

      {/* Carrusel y acordeón lado a lado */}
      <div className="cuerpo">
        <div className="carrusel">
          <props.Carrusel />
        </div>
        <div className="acordeon">
          <props.AS />
        </div>
      </div>
    </div>
  );
}

