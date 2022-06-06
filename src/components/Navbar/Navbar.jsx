import React from "react";

import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
// import { CartContext } from "../../context/CartContext";
import { CartContext } from "../../context/CartContext";

// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {

  const { Auth, Out } = useContext(AuthContext);
  const { itemcount } = useContext(CartContext);

  const navigate = useNavigate();
  
  const handleLoginClick = () => {
    if (Auth) {
      Out();
    } else {
      navigate("/login");
    }
  };
  return (
    <div data-cy="navbar" style={{ padding: "10px", display: "flex", gap: "20px", justifyContent: "space-between",}}>
      <div style={{ display: "flex", gap: "20px",}}>
        <Link data-cy="navbar-home-link" to="/">LOGOUT</Link></div><div style={{ display: "flex"}}>
        <span data-cy="navbar-cart-items-count">{/* count here */}
        <div>Cart Items: {itemcount && `(${itemcount})`}</div></span>
        <button data-cy="navbar-login-Out-button" onClick={handleLoginClick}>{Auth ? "Out" : "Login"}</button>
      </div>
    </div>
  );
};

export default Navbar;
