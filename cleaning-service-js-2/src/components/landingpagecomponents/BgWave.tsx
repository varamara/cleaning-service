import cleaningProducts from '../../assets/cleaning-products.svg'
import windowCleaning from '../../assets/window-cleaning.svg'
import dishwashing from '../../assets/dishwashing.svg'
import hoover from '../../assets/hoover.svg'

const BgWave: React.FC = () => {
    return (
        <>
            
          <div className=" py-40 bg-wave bg-no-repeat bg-left-top bg-cover  flex items-center justify-center mt-8 md:mt-16  ">
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
        </>
    );
};

export default BgWave;