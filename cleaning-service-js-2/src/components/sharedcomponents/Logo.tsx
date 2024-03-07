import LogoImg from '../../assets/logoImg.png';

const Logo = () => {
  return (
    <div className="w-24 h-auto">
      <img src={LogoImg} alt="Logo" className="w-full h-full" />
    </div>
  );
};

export default Logo;
