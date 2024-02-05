import React, { useState } from "react";

function Buscador({ data }) {
  const [filtro, setFiltro] = useState("");
  const resultadosFiltrados = data.filter((item) =>
    item.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar por nombre"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />
      {resultadosFiltrados.map((item) => (
        <div key={item.id}>
          <img src={item.imagen} alt={item.nombre} />
          <p>{item.nombre}</p>
          <p>{item.precio}</p>
        </div>
      ))}
    </div>
  );
}

export default Buscador;
