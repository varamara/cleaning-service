import heroVector from '../../assets/hero-vector.svg'
import cleaningProducts from '../../assets/cleaning-products.svg'
import windowCleaning from '../../assets/window-cleaning.svg'
import dishwashing from '../../assets/dishwashing.svg'
import hoover from '../../assets/hoover.svg'

const HeroSection: React.FC = () => {
  return (
    <>
      <div className="bg-mob-hero-slash  bg-no-repeat h-full">
        <div className="h-screen bg-no-repeat top-40">
          <div className="mt-24 text-base sm:flex-row justify-center sm:columns-2 grid grid-cols-2">
            <div className="p-9 sm:p-8 sm:w-full flex flex-col justify-center  ">
              <h1 className="sm:text-lg md:text-4xl  text-primaryBlue">
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
              <button className="btn border-2 border-primaryBlue px-4 py-1 text-sm rounded-full my-4 inline-block w-64">
                Boka städning
              </button>
            </div>

            <div className="z-3 sm:w-full">
              <img
                src={heroVector}
                alt="cleaners vector"
                className="w-full z-4"
              />
            </div>
          </div>

          <div className="pt-20 h-3/6 bg-wave bg-no-repeat bg-left-top bg-cover p-0 z-1 flex items-center justify-center mt-8 md:mt-16 lg:mt-24 xl:mt-64">
            <div className="text-primaryBlue grid grid-cols-2 sm:grid-cols-4 sm:px-22 md:px-26 xl:px-48 2xl:px-96 gap-4 sm:gap-8 md:gap-12 lg:gap-16">
              <div className="place-content-center text-center">
                <img className="" src={cleaningProducts} alt="" />
                <h3 className="pt-5 pb-2">Lorem Ipsum</h3>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Veritatis, magnam.
                </p>
              </div>
              <div className="place-content-center text-center">
                <img src={windowCleaning} alt="" />
                <h3 className="pt-5 pb-2">Lorem Ipsum</h3>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Veritatis, magnam.
                </p>
              </div>
              <div className="place-content-center text-center">
                <img src={dishwashing} alt="" />
                <h3 className="pt-5 pb-2">Lorem Ipsum</h3>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Veritatis, magnam.
                </p>
              </div>
              <div className="place-content-center text-center">
                <img src={hoover} alt="" />
                <h3 className="pt-5 pb-2">Lorem Ipsum</h3>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Veritatis, magnam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
