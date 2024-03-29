import { RegistrationContext } from "../../contexts/registrationContext/RegistrationProvider";
import { useContext } from "react";
import susieImg from "../../assets/susie.svg";

const UserInfo: React.FC = () => {
  const { currentUser } = useContext(RegistrationContext);

  return (
    <div className="mb-16 max-w-2xl mx-4 sm:max-w-sm  md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto  lg:mx-auto xl:mx-auto rounded-lg text-gray-900">
      <img
        className="object-center object-cover mx-auto bg-pink rounded pt-10"
        src={susieImg}
        alt="person looking front"
      />
      <div className="text-center flex  mt-10 flex-col">
        <h2 className="text-xl font-semibold">
          Namn: {currentUser?.firstName}
        </h2>
        <h2 className="text-xl font-semibold">
          Efternamn: {currentUser?.lastName}
        </h2>
        <p className="text-xl text-gray-500 mb-10">
          Email: {currentUser?.email}
        </p>

        <div className="p-4 border-t mx-8 mt-2 border-primaryOrange"></div>
        <a href="#" className="color-primaryOrange text-sm">
          Byt lösenord?
        </a>
      </div>
    </div>
  );
};

export default UserInfo;
