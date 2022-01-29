import Link from "next/link";

const NavLink = ({ href, children }) => {
  return (
    <Link
      href={href}
      className={pathName.startsWith("/meals") ? classes.active : undefined}
    >
      {children}
    </Link>
  );
};

export default NavLink;
