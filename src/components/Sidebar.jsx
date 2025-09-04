import { Link } from "react-router-dom";
import './Sidebar.css'; 

function Header() {
  return (
    <div className="d-flex">
      <nav className="nav flex-column p-3" style={{ width: '250px', height: '100vh' }}>
        <Link className="nav-link-custom" to="/"><i className="bi bi-house-fill"></i> Home</Link>
        <Link className="nav-link-custom" to="/spot"><i class="bi bi-p-square-fill"></i> Vagas</Link>
        <Link className="nav-link-custom" to="/car"><i class="bi bi-car-front-fill"></i> Carros</Link>
        <Link className="nav-link-custom" to="/assignment"><i class="bi bi-pass-fill"></i> Atribuições</Link>
      </nav>
    </div>
  );
}

export default Header;
