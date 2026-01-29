import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-4">
              LUXE FASHION
            </h2>
            <p className="mb-6">
              Elevating your style with premium fashion since 2020
            </p>

            <div className="flex gap-4">
              <SocialIcon icon={<FaInstagram />} />
              <SocialIcon icon={<FaFacebookF />} />
              <SocialIcon icon={<FaTwitter />} />
              <SocialIcon icon={<FaPinterestP />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink text="New Arrivals" />
              <FooterLink text="Best Sellers" />
              <FooterLink text="Sale" />
              <FooterLink text="Gift Cards" />
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Customer Care</h3>
            <ul className="space-y-2">
              <FooterLink text="Privacy Policy" />
              <FooterLink text="Refund Policy" />
              <FooterLink text="Shipping Info" />
              <FooterLink text="Terms & Conditions" />
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-green-500" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-purple-400" />
                support@luxefashion.com
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-red-400" />
                123 Fashion Ave, NY 10001
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm">
          © 2024 LUXE FASHION. All rights reserved. Crafted with passion for style.
        </div>
      </div>
    </footer>
  );
};

/* Reusable components */
const FooterLink = ({ text }) => (
  <li className="hover:text-white cursor-pointer transition">
    {text}
  </li>
);

const SocialIcon = ({ icon }) => (
  <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-white hover:text-black transition cursor-pointer">
    {icon}
  </div>
);

export default Footer;
