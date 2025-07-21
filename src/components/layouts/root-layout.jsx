import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar } from "./Navbar";

export function RootLayout({children}) {
  return (
    <Router>
      <Navbar />
      <Routes>{children}</Routes>
    </Router>
  );
}
