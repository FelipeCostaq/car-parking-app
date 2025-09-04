import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CarList.css'

function CarList(){
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("https://localhost:7148/api/Car/all").then(response => {
            setCars(response.data);
            setLoading(false);
        })
        .catch(err => {
            setError(err.message || "Erro ao carregar os Carros. Tente novamente...");
            setLoading(false);
        })
    }, []);

    if (loading) return <div className="d-flex justify-content-center align-items-center" style={{ height: '98vh'}}>
        <div class="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>
    </div>;
    if (error) return <p className="text-center mt-4 text-danger">{error}</p>;

  return (
    <div className="container-fluid mt-5 container-table w-100">
        <div className="table-responsive w-100 shadow-sm rounded bg-white p-3">
            <table className="table table-striped table-hover table-bordered table-sm align-middle mb-0">
                <thead className="table-dark">
                    <tr>
                    <th>ID</th>
                    <th>Placa</th>
                    <th>Modelo</th>
                    <th>Proprietário</th>
                    <th>Apartamento</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map(car => (
                    <tr key={car.id}>
                        <td>{car.id}</td>
                        <td>{car.plate}</td>
                        <td>{car.model}</td>
                        <td>{car.owner}</td>
                        <td>{car.apartment}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  );
}

export default CarList;