import "./AplicationLayout.css";
import React from "react";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

export default ({ children }: LayoutProps) => {
  return (
    <div id="layout">
      <Header />
      <main id="main-content">{children}</main>
    </div>
  );
};
