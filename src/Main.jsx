import Header, { HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Timeline from "./components/Timeline";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { useState } from "react";

const Main = ({ user }) => {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <>

    {console.log(user)}
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home user={user} />
      <Work user={user} />
      <Timeline user={user} />
      <Services />
      <Contact />
      <Footer />
      <Toaster />
    </>
  );
};

export default Main;
