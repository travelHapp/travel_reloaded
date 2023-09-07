import { NavLink, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  return (
    <div>
      <NavLink
        to={{
          pathname: "/login",
          state: { from: location },
        }}
      >
        Login
      </NavLink>

      <NavLink
        to={{
          pathname: "/logout",
          state: { from: location },
        }}
      >
        Logout
      </NavLink>
    </div>
  );
};

export default Layout;
