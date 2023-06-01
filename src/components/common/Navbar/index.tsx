import { NavLink, useLocation } from "react-router-dom";
import css from "./style.module.css";

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
      <nav className={css["container"]}>
        <h2>{title}</h2>
        {items.map(({ path, title }) => (
          <NavLink
            key={title}
            to={path}
            className={path === pathname ? css.selectedlink : ""}
          >
            {title}
          </NavLink>
        ))}
      </nav>
  );
};

export default Navbar;
