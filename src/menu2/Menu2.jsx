import React from "react";

const Menu2 = ({children}) => {
  return (
    <>
      <h1>Menu children</h1>
      <nav>
        <ul>{children}</ul>
      </nav>
    </>
  );
};

export default Menu2;
