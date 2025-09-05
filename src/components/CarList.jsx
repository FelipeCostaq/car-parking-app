import React from 'react';

function CarList({ cars }) {
  if (!cars) cars = [];

  return (
    <div className="container-fluid mt-5 container-table w-100">
      <div className="table-responsive w-100 shadow-sm rounded p-3">
        <table className="table table-bordered table-hover table-striped">
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
            {cars.length > 0 ? (
              cars.map((car) => (
                <tr key={car.id}>
                  <td>{car.id}</td>
                  <td>{car.plate}</td>
                  <td>{car.model}</td>
                  <td>{car.owner}</td>
                  <td>{car.apartment}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  Nenhum carro encontrado
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CarList;
