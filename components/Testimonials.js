"use client"

import Image from "next/image";
import { useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "Ever since I spoke to Voltas team, I got full support from them; they have helped me a lot. Because of the tremendous service provided by them, I have referred many of my friends to them. I will be referring more in the future for sure.",
        name: "Arun Punjabi",
    },
    {
      quote:
        "It was a remarkable experience with ‘Voltas Engineering’ where the team guided me very well throughout the process. They have keen knowledge and experience in their field.",
        name: "Parul Chauhan",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="relative bg-black text-white py-20 md:py-40 font-montserrat">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gray-900">
        <Image
          src="/testimonial-bg.jpg" // Replace with your background image path
          alt="background"
          layout="fill"
          objectFit="cover"
          className="opacity-10 "
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="flex flex-col ">
        <h2 className="text-3xl font-bold text-white">
          VOLTAS <span className="text-[#71BF44]">TESTIMONIALS</span>
        </h2>
        <span className="border-b-2 border-[#71BF44] w-10 mx-auto mt-4 "/>
        <p className="text-gray-300 mb-8 mt-10 px-8 md:px-0">
          All our employees are dedicated to providing top-level services. See
          what our clients say about us.
        </p>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="text-md leading-relaxed mb-4 px-16 md:px-0">
            {testimonials[currentIndex].quote}
          </div>
          <div className="font-semibold ">
            {testimonials[currentIndex].name}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-[#71BF44]" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Testimonials;
