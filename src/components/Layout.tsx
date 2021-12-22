import * as React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutInterface {
  showHeaderContactBtn?: boolean;
  children: JSX.Element;
}

function Layout({ children, showHeaderContactBtn }: LayoutInterface) {
  return (
    <div>
      <Header showContactBtn={showHeaderContactBtn} />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
