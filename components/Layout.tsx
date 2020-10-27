import { ThemeProvider } from "@material-ui/core";
import Head from "next/head";
import Link from "next/link";
import React, { ReactElement, ReactNode } from "react";
import theme from "../utils/theme";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  title = "This is the default title",
}: Props): ReactElement => (
  <div>
    <ThemeProvider theme={theme}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
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
      {children}
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </ThemeProvider>
  </div>
);

export default Layout;
