import heroVector from '../assets/hero-vector.svg'
import cleaningProducts from '../assets/cleaning-products.svg'
import windowCleaning from '../assets/window-cleaning.svg'
import dishwashing from '../assets/dishwashing.svg'
import hoover from '../assets/hoover.svg'
import scrubsCleaningProducts from '../assets/cleaning-products-lg.svg'
import larry from '../assets/larry.svg'
import susie from '../assets/susie.svg'
import marty from '../assets/marty.svg'

const LandingPage = () => {


  return (
    <div className="flex flex-col h-s">

      <div className="bg-mob-hero-slash  bg-no-repeat z-0 relative h-full">
      <div className="h-screen bg-no-repeat z-0 relative">
        <div className="mt-24 text-base sm:flex-row justify-center sm:columns-2 grid grid-cols-2">
          <div className="p-9 sm:p-8 sm:w-full flex flex-col justify-center  ">
            <h1 className="sm:text-lg md:text-4xl  text-primaryBlue">Det här är en heading om städning</h1>
            <p className="text-sm text-primaryBlue">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati sapiente ducimus facere vitae incidunt deleniti nihil ipsa. Illo totam consectetur eaque quas non voluptate nam asperiores placeat exercitationem saepe nulla explicabo, eveniet enim quia, a quod excepturi quisquam voluptas magnam dignissimos dolor pariatur maxime ipsum rerum? Quam alias harum ea!</p>
            <button className="btn border-2 border-primaryBlue px-4 py-1 text-sm rounded-full my-4 inline-block w-64">Boka städning</button>
          </div>

          <div className="z-3 sm:w-full">
            <img
              src={heroVector}
              alt="cleners vector"
              className="w-full z-4" />
          </div>
        </div>


        <div className="h-3/6 bg-wave bg-no-repeat bg-left-top bg-cover p-0 z-1 absolute top-72 right-0 left-0 flex items-center justify-center mt-8 md:mt-16 lg:mt-24 xl:mt-64">
          <div className="text-primaryBlue grid grid-cols-2 sm:grid-cols-4 sm:px-22 md:px-26 xl:px-48 2xl:px-96 gap-4 sm:gap-8 md:gap-12 lg:gap-16">
          <div className="place-content-center text-center">
              <img className="" src={cleaningProducts} alt="" />
              <h3 className="pt-5 pb-2">Lorem Ipsum</h3>
              <p className='text-xs'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, magnam.
              </p>
            </div>
            <div className="place-content-center text-center">
              <img src={windowCleaning} alt="" />
              <h3 className="pt-5 pb-2">Lorem Ipsum</h3>
              <p className='text-xs'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, magnam.
              </p>
            </div>
            <div className="place-content-center text-center">
              <img src={dishwashing} alt="" />
              <h3 className="pt-5 pb-2">Lorem Ipsum</h3>
              <p className='text-xs'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, magnam.
              </p>
            </div>
            <div className="place-content-center text-center">
              <img src={hoover} alt="" />
              <h3 className="pt-5 pb-2">Lorem Ipsum</h3>
              <p className='text-xs'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, magnam.
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row lg:h-screen relative ">
        <div className="w-full bg-pink">
          <img className="w-full h-screen object-cover" src={scrubsCleaningProducts} alt="" />
        </div>
        <div className="w-full bg-primaryBeige flex items-center justify-center h-screen">
          <div className="w-2/3">
          <h2>Vårt Miljöarbete</h2>
          <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est explicabo et, consequuntur quae iste harum eum nisi modi sapiente. Omnis voluptatibus fuga minus adipisci natus! Autem explicabo consequatur exercitationem animi mollitia in quia cumque nihil. Earum totam, suscipit nulla eaque, reiciendis soluta itaque eum quibusdam necessitatibus est debitis, repellat praesentium.</p>
          <button className="btn border-2 border-primaryBlue px-4 py-1 text-sm rounded-full my-4">Boka städning</button>

          </div>

          
        </div>
        
      </div>
      <div className='bg-secondaryBlue h-full '>
        <div className='flex flex-col justify-center items-center'>
      <div className='grid md:grid-cols-3  sm:gap-8 md:gap-16 lg:gap-28 flex-row my-16  w-2/3 text-center'>
      <div className='w-full'>
        <div className='bg-primaryBeige'>
        <img src={susie} alt="" />
        </div>
        <h3>Susie Green</h3>
        <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div className='w-full'>
      <div className='bg-primaryBeige'>
        <img src={marty} alt="" />
        </div>
        <h3>Marty Funkhouser</h3>
        <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div className='w-full flex flex-col items-center'>
      <div className='bg-primaryBeige'>
        <img className="object-cover self-center" src={larry} alt="" />
        </div>
        <h3>Larry David</h3>
        <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>

      </div>
      <div className='flex flex-col w-2/3 justify-center text-center mb-16'>
        <h2 className='text-lg pb-3'>Lorem ipsum dolor sit amet consecetur</h2>
        <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate deserunt, obcaecati eius enim ratione corporis. Modi adipisci et voluptate totam magnam odit possimus non dolore esse eaque, aliquam nam dolorem.</p>
        <button className="btn border-2 border-primaryBlue px-4 py-1 text-sm rounded-full mt-8 w-2/6 self-center">Boka städning</button>

      </div>
      
      </div>
      
      </div>
    </div>
  )
}

export default LandingPage