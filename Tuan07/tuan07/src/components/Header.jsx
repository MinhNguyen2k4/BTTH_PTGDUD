const Header = () => {
  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-lg font-semibold">DASHBOARD</h1>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded px-2 py-1 mr-2"
        />
        <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
      </div>
    </div>
  );
};

export default Header;
