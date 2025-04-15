import { Link, useLocation } from "react-router-dom";
import AdBanner from "./AdBanner";

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/projects", label: "Projects" },
    { path: "/teams", label: "Teams" },
    { path: "/analytics", label: "Analytics" },
    { path: "/messages", label: "Messages" },
    { path: "/integrations", label: "Integrations" },
  ];

  return (
    <div className="w-48 bg-white shadow-md h-full p-4 flex flex-col">
      <div className="text-xl font-bold mb-6">Logo</div>
      <ul className="flex-1">
        {menuItems.map((item) => (
          <li key={item.path} className="mb-2">
            <Link
              to={item.path}
              className={`block p-2 rounded ${
                isActive(item.path)
                  ? "bg-pink-100 text-pink-600"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <AdBanner />
    </div>
  );
};

export default Sidebar;
