import { useState } from "react";

function AssignmentAdd() {
  const [spotId, setSpotId] = useState("");
  const [carId, setCarId] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://localhost:7148/api/ParkingAssignment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ spotId, carId }),
      });

      if (!response.ok) throw new Error("Erro ao criar a atribuição");

      const data = await response.json();
      console.log("Carro criado:", data);

      setSpotId("");
      setCarId("");

      const modalEl = document.getElementById("assignmentAddModal");
      const modal = bootstrap.Modal.getInstance(modalEl);
      modal.hide();
    } catch (error) {
      console.error(error);
      alert("Não foi possível criar a atribuição");
    } finally {
      setLoading(false);
      window.location.reload();
    }
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-success"
        data-bs-toggle="modal"
        data-bs-target="#assignmentAddModal"
      >
        <i className="bi bi-plus-lg"></i>
      </button>

      <div
        className="modal fade"
        id="assignmentAddModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="assignmentAddModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div className="modal-header">
                <h5 className="modal-title" id="assignmentAddModalLabel">
                  Adicionar Atribuição
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
                  {loading ? "Criando..." : "Criar Carro"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignmentAdd;
