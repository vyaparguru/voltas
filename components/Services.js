import React from "react";
import { FaTools, FaBolt, FaFaucet, FaSnowflake, FaFireExtinguisher, FaPumpMedical } from "react-icons/fa";

const services = [
  {
    icon: <FaTools />,
    title: "Building Envelope",
    description: "With over 30 years of construction experience in BC, CEO and P.Eng Gurpreet Purewal knows that building an energy efficient and comfortable home takes more than just good engineering.",
  },
  {
    icon: <FaBolt />,
    title: "Electrical",
    description: "Voltas’ engineers have been designing and reviewing commercial, industrial, and residential electrical systems since 2008. Our team provides lighting and power layouts as well as load calculations and design details.",
  },
  {
    icon: <FaFaucet />,
    title: "Plumbing",
    description: "Voltas’ area of expertise covers residential and commercial plumbing: everything from single family homes to large-scale mixed-used facilities.",
  },
  {
    icon: <FaSnowflake />,
    title: "HVAC",
    description: "Voltas provides mechanical designs and field reviews for commercial, multi-family, and single-family units. We follow best practices make sure your projects are provided efficient heating, cooling, and ventilation based on your specific needs.",
  },
  {
    icon: <FaFireExtinguisher />,
    title: "Fire Sprinklers",
    description: "Voltas has designed sprinkler systems for commercial and residential projects across the lower mainland, from 4-bedroom homes to large mixed-unit projects.",
  },
  {
    icon: <FaPumpMedical />,
    title: "Sump Pumps",
    description: "Sump pumps are required to pump up storm and sewer water wherever the city mains are above house fixtures.",
  },
  {
    icon: <FaTools />, // Replace with appropriate icon if needed
    title: "Dust Collection",
    description: "Dust Collection systems are required wherever there are excessive amounts of dust produced, for example in wood shops or spray-painting facilities.",
  },
  {
    icon: <FaTools />, // Replace with appropriate icon if needed
    title: "Spray Booths",
    description: "Voltas engineers design, draft, and field review paint spray booths. Spray booths present health hazards which can be mitigated or eliminated through good practice and engineering.",
  },
  {
    icon: <FaTools />, // Replace with appropriate icon if needed
    title: "Noise Mitigation",
    description: "Voltas Engineering is the premier Noise Mitigation consultant in the lower mainland. Our company is recommended by the City of Surrey because of our extensive N.M. engineering experience.",
  },
  {
    icon: <FaTools />, // Replace with appropriate icon if needed
    title: "Kitchen Hoods",
    description: "Voltas works with suppliers and contractors to provide effective and code-compliant kitchen hoods, having worked on many renowned restaurants in the Lower Mainland in the past 5 years.",
  },
  {
    icon: <FaTools />, // Replace with appropriate icon if needed
    title: "Energy Design",
    description: "Voltas engineers have been designing and reviewing commercial, industrial, and residential electrical systems since 2008. Our team provides lighting and power layouts as well as load calculations and design details.",
  },
  {
    icon: <FaTools />, // Replace with appropriate icon if needed
    title: "Grease Interceptor",
    description: "Home Services Grease Interceptor GREASE INTERCEPTOR Grease traps and grease interceptors are essential for effective plumbing.",
  },
];

const Services = () => {
  return (
    <section className="pt-20 md:pt-40 pb-16 md:pb-20 bg-gray-50 px-2 md:px-10 lg:px-52">
      <div className="flex flex-col md:flex-row justify-center gap-6 lg:gap-16 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#272974] mx-auto md:mx-0 whitespace-nowrap">Our Services</h2>
        <span className="border-r-2 hidden md:block border-[#71bf44] " />
        <span className="border-b-2 block md:hidden border-[#71bf44] w-10 mx-auto" />
        <p className="font-medium px-10 md:px-0 text-sm md:text-lg text-gray-700">
        Electrical, Plumbing, HVAC, Noise Mitigation, Sump Pumps, Kitchen Hoods, Spray Booth 
        Design, Dust Collection…
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 ">
        {services.map((service, index) => (
          <div
          key={index}
          className="group flex flex-col gap-4 bg-white border px-6 py-8 transition-all hover:bg-[#272974]"
        >
          <div className="flex gap-10">
            <div className="text-[#272974] text-4xl mb-4 transition-colors group-hover:text-white">
              {service.icon}
            </div>
            <h3 className="text-md font-semibold text-[#272974] uppercase mb-2 cursor-pointer transition-colors group-hover:text-white hover:underline">
              {service.title}
            </h3>
          </div>
          <p className="text-sm text-gray-700 mb-4 transition-colors group-hover:text-white">
            {service.description}
          </p>
          <a
            href="#"
            className="mx-auto text-[#337ab7] text-sm font-medium transition-colors hover:underline"
          >
            Read More →
          </a>
        </div>
        
        
        ))}
      </div>
    </section>
  );
};

export default Services;
