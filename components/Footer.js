import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#272974] text-white pt-10">
      <div className="py-6 text-center">
        <div className='flex flex-col md:flex-row justify-center gap-6 md:gap-96'>
            <h2 className="text-2xl font-semibold">Our Accreditations</h2>
            <button className="bg-yellow-600 text-white w-60 mx-auto md:mx-0 md:px-12 py-3 font-semibold lg:ml-48">
            SUBMIT REQUEST
            </button>                                       
        </div>
        <div className="flex justify-center items-center gap-6 md:gap-16 mt-4 flex-wrap">
          <img
            src="https://voltasengineering.com/wp-content/uploads/2020/12/PMI.png"
            alt="Accreditation 1"
            className="h-32 md:h-24"
          />
          <img
            src="https://voltasengineering.com/wp-content/uploads/2020/12/nfpa-1.png"
            alt="Accreditation 2"
            className="h-32 md:h-24"
          />
          <img
            src="https://voltasengineering.com/wp-content/uploads/2020/12/EGBC.png"
            alt="Accreditation 3"
            className="h-32 md:h-24"
          />
          <img
            src="https://voltasengineering.com/wp-content/uploads/2020/12/CHBA.png"
            alt="Accreditation 4"
            className="h-32 md:h-24"
          />
          <img
            src="https://voltasengineering.com/wp-content/uploads/2020/12/CagBC.png"
            alt="Accreditation 5"
            className="h-32 md:h-24"
          />
          <img
            src="https://voltasengineering.com/wp-content/uploads/2022/10/teca-logo.gif"
            alt="Accreditation 6"
            className="h-32 md:h-24"
          />
        </div>
      </div>
      <div className="border-t border-[#71bf44] my-4 mx-auto lg:w-[65rem]"></div>
      <div className="py-8 flex flex-col md:flex-row justify-between items-center px-4 lg:px-60">
        <div className="flex flex-col items-center">
          <img
            src="https://voltasengineering.com/wp-content/uploads/2020/12/footer-logo.png"
            alt="Voltas Engineering"
            className="h-12 mb-2"
          />
          <div className="flex gap-4 mt-4">
            <a href="https://facebook.com/voltasengineering" target="_blank" rel="noreferrer">
              <FaFacebook className="h-6 w-6 text-[#71bf44]" />
            </a>
            <a href="https://instagram.com/voltasengineering" target="_blank" rel="noreferrer">
              <FaInstagram className="h-6 w-6 text-[#71bf44]" />
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center text-sm mt-6 md:mt-0">
          <div className="flex items-center gap-2 mx-4">
            <FaPhoneAlt className="text-[#71bf44] w-6 h-6" />
            <span>+1 604-593-2293</span>
          </div>
          <div className="flex items-center gap-2 mx-4">
            <FaEnvelope className="text-[#71bf44] w-6 h-6" />
            <span>info@voltasengineering.com</span>
          </div>
          <div className="flex items-center gap-2 mx-4">
            <FaMapMarkerAlt className="text-[#71bf44] w-6 h-6" />
            <span>#211-8433 132 Street, Surrey, BC, V3W 0A6</span>
          </div>
        </div>
      </div>
      <div className="border-t border-[#71bf44] mx-auto lg:w-[65rem] py-4 text-center text-sm">
        <p>
          Copyright © 2025 | <span className="text-[#71bf44]">Voltas Engineering</span> | All rights
          reserved. | Website Developed by{" "}
          <a href="https://vyaparguru.com" target="_blank" rel="noreferrer" className="text-[#71bf44]">
            Vyapar Guru
          </a>
        </p>
      </div>
    </footer>
  );
}
