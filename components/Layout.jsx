import React from "react";
import { useScrollDirection } from "react-use-scroll-direction";
import Footer from "./Footer";
import Header from "./header/Header";

export default function Layout({ children }) {
  const { isScrollingUp, isScrolling } = useScrollDirection();

  const showMobileSearch = isScrollingUp && (isScrolling || !isScrolling);

  console.log(isScrollingUp ? "scroll up" : "scroll down");

  return (
    <>
      <Header showMobileSearch={showMobileSearch} />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
