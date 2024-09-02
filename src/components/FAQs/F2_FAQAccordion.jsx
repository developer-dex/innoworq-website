import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import image from "../../assets/Logo2.png";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4 border-b">
      <button
        className="flex justify-between items-center w-full p-4 bg-white text-left"
        onClick={toggleOpen}
      >
        <span className="text-lg font-semibold text-[#1C2752]">{question}</span>
        {isOpen ? (
          <ChevronUpIcon className="h-5 w-5 text-[#1C2752]" />
        ) : (
          <ChevronDownIcon className="h-5 w-5 text-[#1C2752]" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 text-[#7E7E7E]">{answer}</div>
      </div>
    </div>
  );
};

const F2_FAQAccordion = () => {
  const faqs = [
    {
      question: "What is your return policy?",
      answer: "Our return policy is 30 days with no questions asked.",
    },
    {
      question: "How long does shipping take?",
      answer: "Shipping usually takes 5-7 business days.",
    },
    {
      question: "Where are you located?",
      answer: "We are located in San Francisco, CA.",
    },
    {
      question: "Where are you located cuurently?",
      answer: "We are located in San Francisco, CA.",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded-sm shadow-md mb-16">
      {/* <h1 className="text-2xl font-bold text-gray-800 mb-6">FAQs</h1> */}
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default F2_FAQAccordion;
