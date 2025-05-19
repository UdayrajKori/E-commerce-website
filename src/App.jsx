import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Practice from "./components/Practice";
import { Outlet } from "react-router";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      {/* <Practice/> */}
    </>
  );
}

export default App;
