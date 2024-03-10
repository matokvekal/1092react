import React from "react";

const Menu1 = ({homeColor,aboutColor,homeText}) => {
 
  return (
    <nav>
      <ul>
        <li>
          <a href="/" style={{color:homeColor}}>{homeText}</a>
        </li>
        <li>
          <a href="/about" style={{color:aboutColor}}>About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu1;
