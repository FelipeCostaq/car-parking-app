import { useState } from "react";

function CarEdit() {
  const [id, setId] = useState("");
  const [plate, setPlate] = useState("");
  const [model, setModel] = useState("");
  const [owner, setOwner] = useState("");
  const [apartment, setApartment] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`https://localhost:7148/api/Car/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ plate, model, owner, apartment }),
      });

      if (!response.ok) throw new Error("Erro ao editar carro");

      const data = await response.json();
      console.log("Carro editado:", data);

      setId("");
      setPlate("");
      setModel("");
      setOwner("");
      setApartment("");

      const modalEl = document.getElementById("carEditModal");
      const modal = bootstrap.Modal.getInstance(modalEl);
      modal.hide();
    } catch (error) {
      console.error(error);
      alert("Não foi possível editar o carro");
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
        data-bs-target="#carEditModal"
      >
        <i className="bi bi-pencil-square"></i>
      </button>

      <div
        className="modal fade"
        id="carEditModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="carEditModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div className="modal-header">
                <h5 className="modal-title" id="carEditModalLabel">
                  Editar Veículo
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
                    type="text"
                    className="form-control"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Placa</label>
                  <input
                    type="text"
                    className="form-control"
                    value={plate}
                    onChange={(e) => setPlate(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Modelo</label>
                  <input
                    type="text"
                    className="form-control"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Proprietário</label>
                  <input
                    type="text"
                    className="form-control"
                    value={owner}
                    onChange={(e) => setOwner(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Apartamento</label>
                  <input
                    type="text"
                    className="form-control"
                    value={apartment}
                    onChange={(e) => setApartment(e.target.value)}
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
                  {loading ? "Editando..." : "Editar Carro"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarEdit;
