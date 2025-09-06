import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AssignmentList from './AssignmentList';

function AssignmentManager() {
  const [assignments, setAssignments] = useState([]);
  const [filtredAssignments, setFiltredAssignments] = useState([]);
  const [searchType, setSearchType] = useState("id");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    axios.get("https://localhost:7148/api/ParkingAssignment/all")
      .then(res => {
        setAssignments(res.data);
        setFiltredAssignments(res.data); 
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!query) {
      setFiltredAssignments(assignments);
      return;
    }

    setLoading(true);
    try {
      let url = "https://localhost:7148/api/ParkingAssignment/";
    switch (searchType) {
      case "id":
        url += query; 
        break;
      case "carId":
        url += `carId?carId=${query}`;
        break;
      case "spotId":
        url += `spotId?spotId=${query}`;
        break;
    }
      const res = await axios.get(url);
      setFiltredAssignments(Array.isArray(res.data) ? res.data : [res.data]);
    } catch (err) {
      console.error(err);
      setFiltredAssignments([]);
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
          <option value="carId">ID Carro</option>
          <option value="spotId">ID Vaga</option>
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
        <AssignmentList assignments={filtredAssignments} />
      )}
    </div>
  );
}

export default AssignmentManager;
