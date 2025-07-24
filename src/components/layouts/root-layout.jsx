// src/components/layouts/root-layout.jsx
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function RootLayout() {
  return (
    <>
      <Navbar />
      <main className="min-h-[80vh]"> {/* Optional styling */}
        <Outlet /> {/* Contenu dynamique selon la route */}
      </main>
      <Footer />
    </>
  );
}
