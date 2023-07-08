import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollButton from "../UI/ScrollButton";

const RootLayout = () => {
  const [showButton, setShowButton] = useState(false);

  const toggleVissible = () => {
    /* retrieves the scroll position of the web page. The document.documentElement represents the root element of the document, which is typically the <html> element.
      The scrollTop property retrieves the number of pixels that the content of the document is currently scrolled vertically.
      By assigning the value of document.documentElement.scrollTop to the variable scrolled, you can store the scroll position in the scrolled variable for further use in your code.*/
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setShowButton(true);
    } else if (scrolled <= 300) {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    // The window.scrollTo() method allows you to scroll the document to a specified position.
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVissible);

  return (
    <>
      <Header />
      <main>
        <Outlet />
        <ScrollButton onScrollToTop={scrollToTop} onShowButton={showButton} />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
