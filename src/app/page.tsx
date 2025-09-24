import React from "react";
import Particles from "../components/Particles";
import Hero from "../components/Hero";
import Navbar  from "../components/Navbar";

const page = () => {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Particles
        className="particles-bg"
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
      <Navbar />
        <Hero />
        {/* Other site content */}
      </div>
    </div>
  );
};

export default page;