// src/pages/Home.js
import React from "react";
import AnimatedBackground from "../components/AnimatedBackground";

function Home() {
  return (
    <section
      id="home"
      class="row-start-2 row-end-6 w-full flex justify-center bg-gradient-to-b from-black to-stone-700"
    >
      <AnimatedBackground />
    </section>
  );
}

export default Home;
