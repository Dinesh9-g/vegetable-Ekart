import { BsSearch } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
// import CartCountBadge from "./Components/CartCountBadge";

const Navbar = () => {
  return (
    <div className="container hidden lg:block">
      <div className="flex justify-between items-center pt-8">
        {/* Logo */}
        <h1 className="text-4xl font-medium">Logo</h1>
        
        {/* Search Bar with Icons */}
        <div className="relative flex items-center w-full max-w-[1000px]">
          <input
            className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[50px] w-full"
            type="text"
            placeholder="Search Product..."
          />
          <BsSearch
            className="absolute top-1/2 right-[150px] transform -translate-y-1/2 text-gray-500"
            size={20}
          />
          {/* Icons on the right side of the search bar */}
          <div className="flex gap-6 items-center ml-4">
            <AiOutlineUser className="text-gray-600 cursor-pointer" size={24} />
            <FaShoppingCart className="text-gray-600 cursor-pointer" size={24} />
            {/* <CartCountBadge size="w-[25px] h-[25px]" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
