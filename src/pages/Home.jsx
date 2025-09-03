import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import SpotPage from "./Spot";
import CarPage from "./Car";
import AssignmentPage from "./Assignment";

function Home() {
  return (
    <Router>
      <nav>
        <Link to="/spot">Vagas</Link> | 
        <Link to="/car">Carros</Link> | 
        <Link to="/assignment">Atribuições</Link>
      </nav>

      <Routes>
        <Route path="/spot" element={<SpotPage />} />
        <Route path="/car" element={<CarPage />} />
        <Route path="/assignment" element={<AssignmentPage />} />
      </Routes>
    </Router>
  )
}

export default Home
