import larry from '../../assets/larry.svg'
import susie from '../../assets/susie.svg'
import marty from '../../assets/marty.svg'

const AboutUs: React.FC = () => {
  return (
    <>
      <div className="bg-secondaryBlue h-full ">
        <div className="flex flex-col justify-center items-center">
          <div className="grid md:grid-cols-3  sm:gap-8 md:gap-16 lg:gap-28 flex-row my-16  w-2/3 text-center">
            <div className="w-full flex flex-col items-center">
              <div className="bg-primaryBeige">
                <img src={susie} alt="" />
              </div>
              <h3 className='mt-2'>Susie Green</h3>
              <p className="text-xs mb-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            <div className="w-full flex flex-col items-center">
              <div className="bg-primaryBeige">
                <img src={marty} alt="" />
              </div>
              <h3 className='mt-2'>Marty Funkhouser</h3>
              <p className="text-xs mb-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            <div className="w-full flex flex-col items-center">
              <div className="bg-primaryBeige">
                <img className="object-cover self-center" src={larry} alt="" />
              </div>
              <h3 className='mt-2'>Larry David</h3>
              <p className="text-xs mb-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-2/3 justify-center text-center mb-16">
            <h2 className="text-lg pb-3">
              Lorem ipsum dolor sit amet consecetur
            </h2>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate deserunt, obcaecati eius enim ratione corporis. Modi
              adipisci et voluptate totam magnam odit possimus non dolore esse
              eaque, aliquam nam dolorem.
            </p>
            <button className="btn border-2 border-primaryBlue px-4 py-1 text-sm rounded-full mt-8 self-center hover:bg-primaryBlue hover:text-white transition duration-200">
              Boka städning
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
