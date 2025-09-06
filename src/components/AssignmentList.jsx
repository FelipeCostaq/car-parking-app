function AssignmentList({ assignments }) {
  if (!assignments) assignments = [];

  return (
    <div className="container-fluid mt-5 container-table w-100">
      <div className="table-responsive w-100 shadow-sm rounded p-3">
        <table className="table table-bordered table-hover table-striped">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>ID Vaga</th>
              <th>ID Carro</th>
            </tr>
          </thead>
          <tbody>
            {assignments.length > 0 ? (
              assignments.map((assignment) => (
                <tr key={assignment.id}>
                  <td>{assignment.id}</td>
                  <td>{assignment.spotId}</td>
                  <td>{assignment.carId}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  Nenhuma atribuição encontrada
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AssignmentList;
