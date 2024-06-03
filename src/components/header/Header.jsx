import React from "react";
import TopHeader from "./TopHeader";
import Navbar from "./navbar/Navbar";
import "./header.css";
function Header() {
  return (
    <>
      <TopHeader />
      <header id="headerSection">
        <Navbar />
      </header>
     
    </>
  );
}

export default Header;
