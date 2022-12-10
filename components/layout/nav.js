import Link from "next/link";
import classes from "./nav.module.css";
import Logo from "./logo";

function Nav() {
  return (
    <header className={classes.header}>
      <div>
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Brows all Articles</Link>
          </li>
          <li>
            <Link href="/contact">Contact Gero</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Nav;
