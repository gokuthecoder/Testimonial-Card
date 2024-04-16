import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Testimonial } from "./COMPONENT/Testimonial";
import { reviews } from "./data";

function App() {
  return (
    <div>
      <div className="mb-4 pb-16">
      <h2 className="scroll-m-19 border-b-2 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-white inline-block border-b-fuchsia-400 rounded">
      <span><img src="goku.svg" alt="" width="100px" className="block mx-auto "/></span><span id="main__title">Our Testimonial </span>
    </h2>
      </div>
      <Testimonial reviews={reviews} />
    </div>
  );
}

export default App;
