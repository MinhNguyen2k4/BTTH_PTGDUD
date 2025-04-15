import TopNav from "./components/TopNav";
import Home from "./pages/Home";
import DishList from "./components/DishList";

const App = () => (
  <div className="min-h-screen bg-gray-100">
    <TopNav />
    <Home />
    <DishList />
  </div>
);

export default App;
