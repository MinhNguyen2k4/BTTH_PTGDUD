const StatsCard = ({ title, value, change }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className="text-xl font-bold">{value}</p>
      <p className="text-green-500 text-xs">+{change}</p>
    </div>
  );
};

export default StatsCard;
