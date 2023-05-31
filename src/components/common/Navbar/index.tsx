import { NavLink, useLocation } from "react-router-dom";
import Styles from "./style.module.css";

type NavbarProps = {
  items: Item[];
  title: string;
};

type Item = {
  title: string;
  path: string;
};

const Navbar = ({ title, items }: NavbarProps) => {
  const { pathname } = useLocation();

  return (
      <nav className={Styles.container}>
        <h2>{title}</h2>
        {items.map(({ path, title }) => (
          <NavLink
            key={title}
            to={path}
            className={path === pathname ? Styles.selectedlink : ""}
          >
            {title}
          </NavLink>
        ))}
      </nav>
  );
};

export default Navbar;
