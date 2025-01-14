const HomeSectionCard = () => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-red-300 rounded-lg shadow-lg overflow-hidden w-full max-w-[10rem] sm:max-w-[12rem] lg:max-w-[14rem] mx-3">
      <div className="h-[13rem] sm:h-[15rem] lg:h-[18rem] w-full">
        <img
          className="object-cover object-top w-full h-full"
          src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/u/v/m/l-grey-106-yellow-freluro-original-imagc26vdpwxgztu-bb.jpeg?q=70"
          alt="Grey and Yellow Kurta"
        />
      </div>
      <div className="p-4">
        <h3 className="text-base sm:text-lg lg:text-xl font-medium text-gray-900">
          NoFilter
        </h3>
        <p className="mt-2 text-xs sm:text-sm lg:text-base text-gray-500">
          This is the bond of the hero.
        </p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
