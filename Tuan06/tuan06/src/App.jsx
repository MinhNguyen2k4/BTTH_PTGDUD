import NavBar from "./components/NavBar";
import TaskCounter from "./pages/TaskCounter";
import TaskList from "./pages/TaskList";

const App = () => (
  <div className="min-h-screen bg-gray-50">
    <NavBar />
    <div className="max-w-2xl mx-auto p-4 space-y-8">
      <TaskCounter />
      <TaskList />
    </div>
  </div>
);

export default App;
