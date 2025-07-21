import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar } from "./Navbar";
import {Footer} from "./Footer";

export function RootLayout({children}) {
  return (
    <Router>
      <Navbar />
      <Routes>{children}</Routes>
      <Footer/>
    </Router>
  );
}
