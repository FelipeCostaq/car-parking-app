import { useState } from "react";
import Assignment from "../pages/Assignment";

function AssignmentDelete() {
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDelete = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`https://localhost:7148/api/ParkingAssignment/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Erro ao excluir a atribuição");

      console.log("Atribuição excluída com sucesso");

      setId("");

      const modalEl = document.getElementById("assignmentDeleteModal");
      const modal = bootstrap.Modal.getInstance(modalEl);
      modal.hide();
    } catch (error) {
      console.error(error);
      alert("Não foi possível excluir a atribuição");
    } finally {
      setLoading(false);
      window.location.reload();
    }
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-danger"
        data-bs-toggle="modal"
        data-bs-target="#assignmentDeleteModal"
      >
        <i className="bi bi-trash"></i>
      </button>

      <div
        className="modal fade"
        id="assignmentDeleteModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="assignmentDeleteModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={handleDelete}>
              <div className="modal-header">
                <h5 className="modal-title" id="assignmentDeleteModalLabel">
                  Excluir Atribuição
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
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  disabled={loading}
                >
                  Cancelar
                </button>
                <button type="submit" className="btn btn-danger" disabled={loading}>
                  {loading ? "Excluindo..." : "Excluir"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignmentDelete;
