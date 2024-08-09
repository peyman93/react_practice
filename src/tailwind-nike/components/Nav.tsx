import { headerLogo } from "../../assets/images";
import { hamburger } from "../../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x absolute z-10 w-full py-8">
      <nav className="max-container flex items-center justify-between">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={128} height={28} />
        </a>
        <ul className="flex flex-1 items-center justify-center gap-16 bg-red-100 max-lg:hidden">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="font-montserrat text-lg text-slate-gray"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <img
          src={hamburger}
          alt="Hamberger"
          width={24}
          height={24}
          className="lg:hidden"
        />
      </nav>
    </header>
  );
};

export default Nav;
