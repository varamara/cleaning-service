interface IPrimaryButton {
  buttonText: string;
  onClick?: () => void;
}

const PrimaryButton: React.FC<IPrimaryButton> = ({ onClick, buttonText }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="bg-primaryBlue text-white py-3 px-5 rounded-full hover:bg-secondaryBlue hover:text-primaryBlue duration-200 tracking-widest text-xs"
    >
      {buttonText}
    </button>
  );
};

export default PrimaryButton;
