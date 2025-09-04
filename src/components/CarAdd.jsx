import { useState } from "react";

function CarAdd() {
  const [plate, setPlate] = useState("");
  const [model, setModel] = useState("");
  const [owner, setOwner] = useState("");
  const [apartment, setApartment] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://localhost:7148/api/Car", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ plate, model, owner, apartment }),
      });

      if (!response.ok) throw new Error("Erro ao criar carro");

      const data = await response.json();
      console.log("Carro criado:", data);

      setPlate("");
      setModel("");
      setOwner("");
      setApartment("");

      const modalEl = document.getElementById("staticBackdrop");
      const modal = bootstrap.Modal.getInstance(modalEl);
      modal.hide();
    } catch (error) {
      console.error(error);
      alert("Não foi possível criar o carro");
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
        data-bs-target="#staticBackdrop"
      >
        <i className="bi bi-plus-lg"></i>
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Adicionar Veículo
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

export default CarAdd;
