import React from "react";
import Header from "@/components/Header";
import { ThemeProvider } from "next-themes";
import styles from "../styles/globals.css";
import Tabs from "@/components/Tabs";

const Layout = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <title>Movie App</title>
        {/* <link rel="stylesheet" href="styles.css" /> */}
      </head>
      <body className="bg-white dark:bg-gray-900 text-black dark:text-white">
        <ThemeProvider enableSystem={true} attribute="class">
          <Header />
          <Tabs />
          <div>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default Layout;
