import { useState } from "react";

function AssignmentEdit() {
  const [id, setId] = useState("");
  const [spotId, setSpotId] = useState("");
  const [carId, setCarId] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`https://localhost:7148/api/ParkingAssignment/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ spotId, carId }),
      });

      if (!response.ok) throw new Error("Erro ao editar a atribuição");

      const data = await response.json();
      console.log("Atribuição editada:", data);

      setId("");
      setSpotId("");
      setCarId("");

      const modalEl = document.getElementById("assignmentEditModal");
      const modal = bootstrap.Modal.getInstance(modalEl);
      modal.hide();
    } catch (error) {
      console.error(error);
      alert("Não foi possível editar a atribuição");
    } finally {
      setLoading(false);
      window.location.reload();
    }
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-warning"
        data-bs-toggle="modal"
        data-bs-target="#assignmentEditModal"
      >
        <i className="bi bi-pencil-square"></i>
      </button>

      <div
        className="modal fade"
        id="assignmentEditModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="assignmentEditModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div className="modal-header">
                <h5 className="modal-title" id="assignmentEditModalLabel">
                  Editar Atribuição
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Id</label>
                  <input
                    type="number"
                    className="form-control"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">ID da Vaga</label>
                  <input
                    type="number"
                    className="form-control"
                    value={spotId}
                    onChange={(e) => setSpotId(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">ID do Carro</label>
                  <input
                    type="number"
                    className="form-control"
                    value={carId}
                    onChange={(e) => setCarId(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  disabled={loading}
                >
                  Fechar
                </button>
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? "Editando..." : "Editar Atribuição"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignmentEdit;
