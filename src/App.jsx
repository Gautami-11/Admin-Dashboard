 import Calendar from "./pages/Calendar";
import Sidebar from "../src/components/layouts/Sidebar";
import Home from "../src/pages/Home";
import Navbar from "../src/components/layouts/Navbar";
import Kanban from "./pages/Kanban"
import Tables from "./pages/Tables";
import { useState } from "react";
import { BrowserRouter ,Routes ,Route} from "react-router-dom";
import './App.css'



function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  
console.log("app jsx loading")


  return (
    <BrowserRouter>
      <div className="flex min-h-screen text">

        {/* Toggle Sidebar */}
        {showSidebar && <Sidebar />}

        <div className="flex-1 flex flex-col">
          <Navbar onToggleSidebar={() => setShowSidebar(!showSidebar)} />
          <div className="p-4 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/tables" element={<Tables />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;