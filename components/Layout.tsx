import Head from "next/head";
import Link from "next/link";
import React, { ReactElement, ReactNode } from "react";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  title = "This is the default title",
}: Props): ReactElement => (
  <div className="bg-white dark:bg-gray-800 flex flex-col h-screen justify-between  md:min-h-screen">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav className="text-gray-900 dark:text-white">
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        |{" "}
        <Link href="/users">
          <a>Users List</a>
        </Link>{" "}
        | <a href="/api/users">Users API</a>
      </nav>
    </header>
    <main className="mb-auto  bg-green-500">{children}</main>
    <footer className="dark:text-white bg-white dark:bg-gray-800">
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
