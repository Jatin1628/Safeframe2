import React from "react";

const FeatureSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl  mx-auto my-32 px-4">
      {/* Left: Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src="https://privacera.com/wp-content/uploads/2023/03/right-level-of-encryption.jpg" // Replace with your image path
          alt="Feature"
          className="rounded-lg shadow-lg w-80 h-80 object-cover"
        />
      </div>
      {/* Right: Explanation */}
      <div className="w-full md:w-1/2 md:pl-12 text-white">
        <h2 className="text-3xl font-bold mb-4">What We Do</h2>
        <p className="text-lg mb-4">
          We provide cutting-edge cryptographic protection for your images and videos, ensuring they remain secure and authentic. By embedding invisible encrypted watermarks and encrypting media files end-to-end, our platform prevents unauthorized use, copying, and deepfake manipulation. Our technology empowers creators and users to confidently share digital content with privacy, integrity, and control.</p>
        
      </div>
    </section>
  );
};

export default FeatureSection;