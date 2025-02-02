import scrubsCleaningProducts from "../../assets/cleaning-products-lg.svg";
const SustainabilityInfo: React.FC = () => {
  return (
    <>
      <div className="mt-0 flex flex-col sm:flex-row lg:h-screen">
        <div className="w-full bg-pink">
          <img
            className="w-full h-screen object-cover"
            src={scrubsCleaningProducts}
            alt=""
          />
        </div>

        <div className="w-full bg-primaryBeige flex items-center justify-center h-screen">
          <div className="w-2/3">
            <h2 className="text-lg pb-2">Vårt Miljöarbete</h2>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              explicabo et, consequuntur quae iste harum eum nisi modi sapiente.
              Omnis voluptatibus fuga minus adipisci natus! Autem explicabo
              consequatur exercitationem animi mollitia in quia cumque nihil.
              Earum totam, suscipit nulla eaque, reiciendis soluta itaque eum
              quibusdam necessitatibus est debitis, repellat praesentium.
            </p>
            <button className="btn border-2 border-primaryBlue px-8 py-2 text-sm rounded-full my-4 hover:bg-primaryBlue hover:text-white transition duration-200 tracking-wider">
              Boka städning
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SustainabilityInfo;
