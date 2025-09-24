"use client"
import React, { useState } from "react";

const Accordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="accordion-collapse" data-accordion="collapse" className="w-full">
      <h2 id="accordion-collapse-heading-1">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          aria-expanded={openIndex === 1}
          aria-controls="accordion-collapse-body-1"
          onClick={() => toggleAccordion(1)}
        >
          <span>How does the cryptographic protection prevent deepfakes?</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 shrink-0 transition-transform duration-200 ${
              openIndex === 1 ? "rotate-180" : ""
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-1"
        className={openIndex === 1 ? "block" : "hidden"}
        aria-labelledby="accordion-collapse-heading-1"
      >
        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            We embed an invisible, encrypted watermark into your media that activates a blackout if deepfake or unauthorized use is detected, making the content unusable for manipulation.
          </p>
          
        </div>
      </div>

      <h2 id="accordion-collapse-heading-2">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          aria-expanded={openIndex === 2}
          aria-controls="accordion-collapse-body-2"
          onClick={() => toggleAccordion(2)}
        >
          <span>Can someone still screenshot or record my protected images or videos?</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 shrink-0 transition-transform duration-200 ${
              openIndex === 2 ? "rotate-180" : ""
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-2"
        className={openIndex === 2 ? "block" : "hidden"}
        aria-labelledby="accordion-collapse-heading-2"
      >
        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">Our system uses a secure viewing layer similar to "View Once" features that disable screenshot and screen recording attempts during playback to maintain media integrity.
          </p>
          
        </div>
      </div>

      <h2 id="accordion-collapse-heading-3">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          aria-expanded={openIndex === 3}
          aria-controls="accordion-collapse-body-3"
          onClick={() => toggleAccordion(3)}
        >
          <span>Is my original image or video encrypted while stored?</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 shrink-0 transition-transform duration-200 ${
              openIndex === 3 ? "rotate-180" : ""
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-3"
        className={openIndex === 3 ? "block" : "hidden"}
        aria-labelledby="accordion-collapse-heading-3"
      >
        <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Yes, all uploaded media is encrypted both in transit and at rest, ensuring complete data privacy and security.
          </p>
          
         
        </div>
      </div>
      <h2 id="accordion-collapse-heading-3">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          aria-expanded={openIndex === 3}
          aria-controls="accordion-collapse-body-3"
          onClick={() => toggleAccordion(3)}
        >
          <span>Who can access or share my uploaded media?</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 shrink-0 transition-transform duration-200 ${
              openIndex === 3 ? "rotate-180" : ""
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-3"
        className={openIndex === 3 ? "block" : "hidden"}
        aria-labelledby="accordion-collapse-heading-3"
      >
        <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Users have full control over access permissions and sharing settings, allowing only authorized viewers to access their protected content.</p>
          
         
        </div>
      </div>
      <h2 id="accordion-collapse-heading-3">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          aria-expanded={openIndex === 3}
          aria-controls="accordion-collapse-body-3"
          onClick={() => toggleAccordion(3)}
        >
          <span>What happens if misuse or tampering is detected?</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 shrink-0 transition-transform duration-200 ${
              openIndex === 3 ? "rotate-180" : ""
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-3"
        className={openIndex === 3 ? "block" : "hidden"}
        aria-labelledby="accordion-collapse-heading-3"
      >
        <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The media triggers an automatic blackout or becomes unusable, preventing further exploitation or deepfake creation. </p>
          
         
        </div>
      </div>
    </div>
  );
};

export default Accordion;
