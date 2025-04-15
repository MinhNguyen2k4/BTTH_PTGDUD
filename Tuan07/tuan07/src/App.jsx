import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />{" "}
            <Route path="/projects" element={<div>Projects Page</div>} />
            <Route path="/teams" element={<div>Teams Page</div>} />
            <Route path="/analytics" element={<div>Analytics Page</div>} />
            <Route path="/messages" element={<div>Messages Page</div>} />
            <Route
              path="/integrations"
              element={<div>Integrations Page</div>}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
