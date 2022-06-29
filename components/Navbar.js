import Link from "next/link";

const Navbar = () => (
  <nav className="navbar">
    <Link href="/">
      <a className="navbar-brand">Basic Notes</a>
    </Link>
    <Link href="/new">
      <a className="navbar-brand">New</a>
    </Link>
  </nav>
);

export default Navbar;
