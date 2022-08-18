import Link from "next/link";
import Router from "next/router";
import Logo from "./logo";
import css from "./main-navigation.module.css";

function MainNavigation() {
  const introClick = () => {
    Router.push("/");
  };

  return (
    <header className={css.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link
              href={{ pathname: "/", query: { name: "intro" } }}
              scroll={false}
              className={css.li_div}
            >
              Intro
            </Link>
          </li>
          <li>
            <Link
              href={{ pathname: "/", query: { name: "skills" } }}
              scroll={false}
              className={css.li_div}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href={{ pathname: "/", query: { name: "project" } }}
              scroll={false}
              className={css.li_div}
            >
              Project
            </Link>
          </li>
          <li>
            <Link
              href={{ pathname: "/", query: { name: "career" } }}
              scroll={false}
              className={css.li_div}
            >
              Career
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
