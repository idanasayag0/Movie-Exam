import { Outlet } from "react-router-dom";

import GenericNavbar from "../common/Navbar";

const Navbar = () => {
  return (
    <div>
      <GenericNavbar
        title="Movie App"
        items={[
          { title: "Home", path: "/" },
          { title: "History&Favorite", path: "/history" },
        ]}
      />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Navbar;
