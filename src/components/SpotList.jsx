import React from 'react';

function SpotList({ spots }) {
  if (!spots) spots = [];

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
            {spots.length > 0 ? (
              spots.map((spot) => (
                <tr key={spot.id}>
                  <td>{spot.id}</td>
                  <td>{spot.number}</td>
                  <td>{spot.type}</td>
                  <td>{spot.status}</td>
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

export default SpotList;
