import dishBg from "../assets/dish-bg.png";
import chefAvatar from "../assets/chef-avatar.png";

const Home = () => (
  <main className="relative">
    <img
      src={dishBg}
      alt="Cooking Scene"
      className="w-full h-96 object-cover"
    />
    <div className="absolute top-1/2 left-8 transform -translate-y-1/2 bg-white bg-opacity-95 p-4 rounded shadow-lg max-w-sm">
      <span className="bg-yellow-200 text-blue-600 text-xs px-2 py-1 rounded">
        Dish of the Day
      </span>
      <h2 className="text-blue-600 text-lg font-bold mt-2">Veggie Pizza</h2>
      <p className="text-gray-700 text-sm mt-2">
        A light pizza with fresh veggies, mozzarella, and a crispy crust,
        perfect for any meal.
      </p>
      <div className="flex items-center gap-2 mt-2">
        <img src={chefAvatar} alt="Chef" className="w-8 h-8 rounded-full" />
        <span className="text-gray-600 text-sm">Chef Mia</span>
      </div>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
        See Recipe
      </button>
    </div>
  </main>
);

export default Home;
