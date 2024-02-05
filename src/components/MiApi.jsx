import React, { useState, useEffect } from "react";

function MiApi() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php")
      .then((response) => response.json())
      .then((dataFromApi) => {
        const cards = dataFromApi.data.filter(
          (item) => item.type === "Normal Monster"
        );

        setData(cards);
        setFilteredData(cards);
      })
      
  }, []);

  useEffect(() => {
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm, data]);

  return (
    <div className="container mt-4 text-center">
      <h2 className="mb-4">¡Descubre las cartas mágicas de Yu-Gi-Oh!</h2>

      {/* Agregar el campo de búsqueda */}
      <input
        type="text"
        placeholder="Buscar por nombre..."
        className="form-control mb-3"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="row justify-content-center">
        {filteredData.map((item) => (
          <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card shadow-sm">
              <img
                src={item.card_images[0].image_url_small}
                className="card-img-top"
                alt={item.name}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Tipo: {item.type}</p>

                <p className="card-text">Ataque: {item.atk}</p>
                <p className="card-text">Defensa: {item.def}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MiApi;
