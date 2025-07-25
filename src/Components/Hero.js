import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="container pt-8">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
        {/* Main Hero Image Section */}
        <div className="relative xl:col-span-2 xl:row-start-1 xl:row-end-[-1]">
          {/* Hero Image */}
          <img
            className="w-full h-full object-cover rounded-lg"
            src="/hero__1.webp"
            alt="Dry fruits banner"
          />

          {/* Overlay Text Content */}
          <div className="absolute top-[50%] left-8 sm:left-16 transform -translate-y-1/2 space-y-4 max-w-[470px] text-black">
            <p className="text-lg sm:text-2xl hidden sm:block">
              100% Original Dry Fruits
            </p>

            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-tight">
              Dried Fruits Best Quality
            </h2>

            <p className="text-gray-300 text-lg sm:text-xl pt-4 sm:pt-8">
              Starting At
            </p>

            <div className="font-medium text-red-600 text-2xl sm:text-4xl pb-4 sm:pb-8">
              ₹ 550
            </div>

            <div className="flex items-center gap-4">
              <button className="bg-accentDark hover:bg-accent text-white rounded-full flex items-center gap-2 px-6 py-3 text-sm sm:text-lg">
                Shop Now <BsArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* Pizza Card */}
        <div className="relative">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="/hero__2.webp"
            alt="Pizza offer banner"
          />
          <div className="absolute top-[50%] left-8 sm:left-16 transform -translate-y-1/2 space-y-4 max-w-[470px] text-black">
            <p className="text-lg sm:text-2xl hidden sm:block">Yummy Pizza</p>

            <p className="text-gray-500 text-lg sm:text-xl pt-4 sm:pt-8">
              Starting At
            </p>

            <div className="font-medium text-red-600 text-2xl sm:text-4xl pb-4 sm:pb-8">
              ₹ 250
            </div>

            <button className="bg-accentDark hover:bg-accent text-white rounded-full flex items-center gap-2 px-6 py-3 text-sm sm:text-lg">
              Shop Now <BsArrowRight />
            </button>
          </div>
        </div>

        {/* Chips Card */}
        <div className="relative">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="/hero__3.webp"
            alt="Chips offer banner"
          />
          <div className="absolute top-[50%] left-8 sm:left-16 transform -translate-y-1/2 space-y-4 max-w-[470px] text-black">
            <p className="text-lg sm:text-2xl hidden sm:block">Chips</p>

            <p className="text-gray-500 text-lg sm:text-xl pt-4 sm:pt-8">
              Starting At
            </p>

            <div className="font-medium text-red-600 text-2xl sm:text-4xl pb-4 sm:pb-8">
              ₹ 25
            </div>

            <button className="bg-accentDark hover:bg-accent text-white rounded-full flex items-center gap-2 px-6 py-3 text-sm sm:text-lg">
              Shop Now <BsArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
