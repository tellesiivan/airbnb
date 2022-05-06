import React from "react";
import { useScrollDirection } from "react-use-scroll-direction";
import Footer from "./Footer";
import Header from "./header/Header";

export default function Layout({ children }) {
  const { isScrollingUp } = useScrollDirection();

  const showMobileSearch = isScrollingUp;

  console.log(isScrollingUp ? "scroll up" : "scroll down");

  return (
    <>
      <Header showMobileSearch={showMobileSearch} />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
