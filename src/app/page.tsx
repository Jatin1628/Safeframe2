import React from "react";
import Particles from "../components/Particles";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Upload from "../components/Upload";
import Feature from "../components/Feature";
import ChromaGrid from "../components/ChromaGrid";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

const page = () => {
  const items = [
    {
      step: "Step 1",
      title: "Upload Media Securely",
      subtitle: "Users upload images or videos through our secure platform",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
    },
    {
      step: "Step 2",
      title: "Embed Cryptographic Protection",
      subtitle:
        "An invisible, encrypted layer is embedded into the media to safeguard authenticity.",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
    },
    {
      step: "Step 3",
      title: "Detect Unauthorized Use",
      subtitle:
        "If the media is used for deepfakes or tampering, our system detects misuse instantly.",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
    },
    {
      step: "Step 4",
      title: "Trigger Media Blackout",
      subtitle:
        "Upon misuse detection, the media blacks out, preventing further exploitation or deepfake creation.",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
    },
  ];
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
        <Upload />
        <div className="mt-10">
          <Feature />
        </div>
        <div>
          <h1 className="text-center mx-5 text-4xl font-bold">
            How SafeFrame Works
          </h1>
          <div className="relative min-h-[400px]  md:min-h-[600px] py-8">
            <ChromaGrid
              items={items}
              radius={300}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </div>
        <div className="flex flex-col items-center mx-5 mb-14 z-10 relative">
          <h1 className="text-center m-5 text-4xl font-bold">
            Frequently Asked Questions
          </h1>
          <div className="w-full  md:w-1/2">
            <FAQ />
          </div>
        </div>
        {/* Other site content */}
        <Footer />
      </div>
    </div>
  );
};

export default page;
