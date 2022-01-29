"use client";
import React from "react";
import logoImg from "@/assets/logo.png";
import Link from "next/link";
import classes from "./main-header.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";

const MainHeader = () => {
  const pathName = usePathname();
  return (
    <header className={classes.header}>
      <Link href={"/"} className={classes.logo}>
        <Image src={logoImg} alt="A plate with food on it" priority /> Next
        Level Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            
          </li>
          <li>
            <Link
              href={"/community"}
              className={pathName === "/community" ? classes.active : undefined}
            >
              Community
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
