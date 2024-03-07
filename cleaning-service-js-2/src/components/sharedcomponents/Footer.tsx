import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-primaryBeige text-secondaryOrange py-8">
      <div className="container mx-auto grid grid-cols-4 gap-4">
        <div>
          <Logo />
        </div>
        <div>
          <ul className="font-bold">
            <li>
              <a href="#">Om oss</a>
            </li>
            <li>
              <a href="#">Boka städning</a>
            </li>
            <li>
              <a href="#">Vårt Team</a>
            </li>
            <li>
              <a href="#">Tjänster</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="font-bold">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Villkor</a>
            </li>
            <li>
              <a href="#">Kontakt</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="font-bold">Öppettider</li>
            <li>
              <p>
                Mån-Fre <br /> 08.00-19.00
              </p>
            </li>
            <li>
              <p>
                Lördag <br /> 10.00-16.00
              </p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
