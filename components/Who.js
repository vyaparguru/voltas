import Image from "next/image";

const WhoWeAre = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-0 lg:px-60 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Who We Are</h2>
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">
            Voltas Engineering – Innovative Design with Simple Solutions
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Voltas Engineering Ltd specializes in multi-residential building consulting, including townhouses and apartment complexes. Our company 
            was founded on the idea of creating a team-oriented and employee-empowered corporate culture. It was that unique vision – combined with 
            consistent, competitive performance – that has fueled Voltas’ rapid rise. We're a leading Consulting Engineering company in Surrey, BC. 
            Our Engineering and Construction Consultants in Surrey, BC are committed to providing high-quality services at affordable rates.
          </p>
        </div>

        {/* Image Section */}
        <div className="relative">
          <Image
            src="/who-we-are.jpg" // Replace with your image path
            alt="image1"
            width={600}
            height={500}
            // className="rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
