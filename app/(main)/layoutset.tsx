"use client";
import { useState } from "react";
import { TopHeader } from "./components/TopHeader";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { CartDrawer } from "./components/CartDrawer";

export default function LayoutSet({ children }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <TopHeader />
      <Header openCart={() => setDrawerOpen(true)} />
      <Navbar />
      <CartDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
