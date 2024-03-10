import React from "react";

const MenuItem = ({ link, color, label }) => {
  return (
    <li>
      <a href={link} style={{ color: color }}>
        {label}
      </a>
    </li>
  );
};

export default MenuItem;
