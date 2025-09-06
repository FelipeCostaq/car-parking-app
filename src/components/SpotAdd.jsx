import { useState } from "react";

function SpotAdd() {
  const [number, setNumber] = useState("");
  const [type, setType] = useState("Carro");
  const [status, setStatus] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://localhost:7148/ParkingSpot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ number, type, status }),
      });

      if (!response.ok) throw new Error("Erro ao criar a vaga");

      const data = await response.json();
      console.log("Vaga criada:", data);

      setNumber("");
      setType("");
      setStatus("");

      const modalEl = document.getElementById("spotAddModal");
      const modal = bootstrap.Modal.getInstance(modalEl);
      modal.hide();
    } catch (error) {
      console.error(error);
      alert("Não foi possível criar a vaga");
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
        data-bs-target="#spotAddModal"
      >
        <i className="bi bi-plus-lg"></i>
      </button>

      <div
        className="modal fade"
        id="spotAddModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="spotAddModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div className="modal-header">
                <h5 className="modal-title" id="spotAddModalLabel">
                  Adicionar Vaga
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
                  <label className="form-label">Numero</label>
                  <input
                    type="number"
                    className="form-control"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Tipo</label>
                  <select
                    className="form-select"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    required
                  >
                    <option value={"Carro"}>Carro</option>
                    <option value={"Moto"}>Moto</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <select
                    className="form-select"
                    value={status}
                    onChange={(e) => setStatus(Number(e.target.value))}
                    required
                  >
                    <option value={1}>Livre</option>
                    <option value={0}>Ocupado</option>
                  </select>
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
                  {loading ? "Criando..." : "Criar Vaga"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpotAdd;
