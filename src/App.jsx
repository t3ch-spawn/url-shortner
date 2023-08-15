import { useEffect, useRef, useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Shortner from "./components/Shortner";
import Statistics from "./components/Statistics";
import Boost from "./components/Boost";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 font-poppins w-[100%]">
      <Header />
      <Hero />
      <Statistics>
        <Shortner />
      </Statistics>
      <Boost/>
      <Footer/>
    </div>
  );
}

export default App;
