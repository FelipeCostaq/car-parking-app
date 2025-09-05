import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SpotList from './SpotList';

function SpotManager() {
  const [spots, setSpots] = useState([]);
  const [filtredSpots, setFiltredSpots] = useState([]);
  const [searchType, setSearchType] = useState("id");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    axios.get("https://localhost:7148/ParkingSpot/all")
      .then(res => {
        setSpots(res.data);
        setFiltredSpots(res.data); 
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!query) {
      setFiltredSpots(spots);
      return;
    }

    setLoading(true);
    try {
      let url = "https://localhost:7148/ParkingSpot/";
    switch (searchType) {
      case "id":
        url += query; 
        break;
      case "number":
        url += `number?number=${query}`;
        break;
      case "type":
        url += `type?type=${query}`;
        break;
      case "status":
        url += `status?status=${query}`;
        break;
    }
      const res = await axios.get(url);
      setFiltredSpots(Array.isArray(res.data) ? res.data : [res.data]);
    } catch (err) {
      console.error(err);
      setFiltredSpots([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
        <form onSubmit={handleSearch} className="d-flex gap-2 mb-3">
            <select
                className="form-select"
                value={searchType}
                onChange={e => {
                    setSearchType(e.target.value);
                    setQuery(""); 
                }}
            >
                <option value="id">ID</option>
                <option value="number">Número</option>
                <option value="type">Tipo</option>
                <option value="status">Status</option>
            </select>

            {searchType === 'status' ? (
                <select
                    className="form-select"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                >
                    <option value="">Selecione...</option>
                    <option value="1">Livre</option>
                    <option value="0">Ocupado</option>
                </select>
            ) : searchType === 'type' ? (
                <select
                    className="form-select"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                >
                    <option value="">Selecione...</option>
                    <option value="Carro">Carro</option>
                    <option value="Moto">Moto</option>
                </select>
            ) : (
                <input
                    type="text"
                    className="form-control"
                    placeholder="Digite a busca"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
            )}

            <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? "Buscando..." : "Buscar"}
            </button>
        </form>

      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <SpotList spots={filtredSpots} />
      )}
    </div>
  );
}

export default SpotManager;
