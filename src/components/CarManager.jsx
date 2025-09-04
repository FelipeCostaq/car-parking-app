import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CarList from './CarList';

function CarManager() {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [searchType, setSearchType] = useState("id");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    axios.get("https://localhost:7148/api/Car/all")
      .then(res => {
        setCars(res.data);
        setFilteredCars(res.data); 
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!query) {
      setFilteredCars(cars);
      return;
    }

    setLoading(true);
    try {
      let url = "https://localhost:7148/api/Car/";
    switch (searchType) {
      case "id":
        url += query; 
        break;
      case "plate":
        url += `plate?plate=${query}`;
        break;
      case "model":
        url += `model?model=${query}`;
        break;
      case "owner":
        url += `owner?owner=${query}`;
        break;
      case "apartment":
        url += `apartment?apartment=${query}`;
        break;
    }
      const res = await axios.get(url);
      setFilteredCars(Array.isArray(res.data) ? res.data : [res.data]);
    } catch (err) {
      console.error(err);
      setFilteredCars([]);
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
          onChange={e => setSearchType(e.target.value)}
        >
          <option value="id">ID</option>
          <option value="plate">Placa</option>
          <option value="model">Modelo</option>
          <option value="owner">Proprietário</option>
          <option value="apartment">Apartamento</option>
        </select>

        <input
          type="text"
          className="form-control"
          placeholder="Digite a busca"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />

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
        <CarList cars={filteredCars} />
      )}
    </div>
  );
}

export default CarManager;
