import "./categories.css"

const Categoryes = ({ onSelectCategory }) => {
  const categories = ["All Products", "Laptops", "Smartphones", "Accessories", "Smart Watches", "MacBook", "iPhone"];

  return (
    <div>

      <div className="flex flex-col p-7">


        {categories.map(category => (
          <button

            key={category.id}
            onClick={() => onSelectCategory(category)}
            className="block p-2 border border-gray-700 space-x-5 mb-3 rounded-lg font-semibold hover:bg-secondary hover:text-white hover:border-white hover:duration-500 ">
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categoryes;
