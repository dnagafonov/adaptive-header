import React from "react";
import HeaderDesktop from "./-desktop/header-desktop";

import "./header.scss";

const init = [
  { "Element1": [{ "Element1.1": ["Element1.1.1"], "Element1.2": [] }] },
  { "Element2": [{ "Element2.1": [], "Element2.2": [] }] },
  { "Element3": [{ "Element3.1": ["Element3.1.1"], "Element3.2": [] }] },
  { "Element4": [{ "Element4.1": [], "Element4.2": [] }] },
];

function Header() {
  return (
    <nav className="header">
      <HeaderDesktop elements={init} />
    </nav>
  );
}

export default Header;
