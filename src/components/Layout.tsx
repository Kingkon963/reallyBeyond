import * as React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }: { children: JSX.Element }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
