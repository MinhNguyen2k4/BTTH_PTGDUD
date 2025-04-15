const DishCard = ({ dish }) => (
  <div className="bg-white rounded-lg shadow hover:shadow-lg transition">
    <img
      src={dish.image}
      alt={dish.name}
      className="w-full h-90 object-cover rounded-t-lg"
    />
    <div className="p-4 relative">
      <h3 className="text-base font-semibold text-gray-800">{dish.name}</h3>
      <div className="text-xs text-blue-600 mt-1">{dish.time}</div>
      <span className="absolute top-4 right-4 text-blue-600">★</span>
    </div>
  </div>
);

export default DishCard;
