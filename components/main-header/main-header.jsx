import React from "react";
import logoImg from "@/assets/logo.png";
import Link from "next/link";
import classes from "./main-header.module.css";
import Image from "next/image";
import NavLink from "./nav-link";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <Link href={"/"} className={classes.logo}>
        <Image src={logoImg} alt="A plate with food on it" priority /> Next
        Level Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href={"/meals"}>Browse Meals</NavLink>
          </li>
          <li>
            <NavLink href={"/community"}>Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
