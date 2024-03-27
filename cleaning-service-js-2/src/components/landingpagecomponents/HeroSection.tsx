import heroVector from "../../assets/hero-vector.svg";
import BgWave from "./BgWave";

const HeroSection: React.FC = () => {
  return (
    <>
      <div className="bg-mob-hero-slash bg-no-repeat">
        <div className="mt-24 text-base sm:flex-row justify-center sm:columns-2 grid grid-cols-2">
          <div className="p-9 sm:p-8 sm:w-full flex flex-col justify-center  ">
            <h1 className="sm:text-lg md:text-4xl  text-primaryBlue mb-4">
              Det här är en heading om städning
            </h1>
            <p className="text-sm text-primaryBlue">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Obcaecati sapiente ducimus facere vitae incidunt deleniti nihil
              ipsa. Illo totam consectetur eaque quas non voluptate nam
              asperiores placeat exercitationem saepe nulla explicabo, eveniet
              enim quia, a quod excepturi quisquam voluptas magnam dignissimos
              dolor pariatur maxime ipsum rerum? Quam alias harum ea!
            </p>
            <button className="btn border-2 border-primaryBlue px-4 py-2 text-sm rounded-full my-4 inline-block w-64 hover:bg-primaryBlue hover:text-white transition duration-200 tracking-wider">
              Boka städning
            </button>
          </div>

          <div className="z-3 sm:w-full">
            <img src={heroVector} alt="cleaners vector" className="w-full" />
          </div>
        </div>
        <div className="relative">
          <BgWave />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
