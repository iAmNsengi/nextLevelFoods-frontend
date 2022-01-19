import React from "react";
import logoImg from "@/assets/logo.png";
import Link from "next/link";

const MainHeader = () => {
  return (
    <header>
      <Link href={"/"}>
        <img src={logoImg.src} alt="A plate with food on iit" /> Next Level Food
      </Link>
    </header>
  );
};

export default MainHeader;
