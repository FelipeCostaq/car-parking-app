import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from '../components/Sidebar'

import HomePage from "./Home"
import SpotPage from "./Spot";
import CarPage from "./Car";
import AssignmentPage from "./Assignment";

function Home() {
  return (
    <Router>
      <div className="d-flex">
        <Header/>
        <div className="flex-grow-1 p-3">
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/spot" element={<SpotPage />} />
            <Route path="/car" element={<CarPage />} />
            <Route path="/assignment" element={<AssignmentPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default Home
