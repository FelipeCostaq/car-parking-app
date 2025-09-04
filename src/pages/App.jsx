import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
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
        <div className="content flex-grow-1 d-flex justify-content-center align-items-center">
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
