const CategoryCard = ({ img, name, count }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 flex items-center transition transform hover:scale-105 hover:shadow-lg">
      {/* Image */}
      <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden">
        <img src={img} alt={name} className="w-full h-full object-cover" />
      </div>
      {/* Text */}
      <div className="flex-1 pl-4">
        <p className="text-lg font-medium text-gray-800">{name}</p>
        <p className="text-sm text-gray-500">{count}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
