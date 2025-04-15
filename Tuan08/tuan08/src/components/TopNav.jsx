import logo from "../assets/foodvibe-logo.png";

const TopNav = () => (
  <header className="flex items-center justify-between p-4 bg-blue-600 text-white shadow">
    <div className="flex items-center gap-4">
      <img src={logo} alt="FoodVibe" className="h-8" />
      <input
        type="text"
        placeholder="Find a dish..."
        className="p-2 rounded bg-white text-gray-800 w-64 outline-none"
      />
    </div>
    <nav className="flex gap-4 text-sm">
      <a href="#" className="hover:text-blue-200">
        Explore
      </a>
      <a href="#" className="hover:text-blue-200">
        Dishes
      </a>
      <a href="#" className="hover:text-blue-200">
        Tips
      </a>
      <a href="#" className="hover:text-blue-200">
        Events
      </a>
      <a href="#" className="hover:text-blue-200">
        About
      </a>
      <button className="text-blue-200 hover:text-white">Sign In</button>
      <button className="bg-yellow-400 text-gray-800 px-3 py-1 rounded">
        Join Now
      </button>
    </nav>
  </header>
);

export default TopNav;
