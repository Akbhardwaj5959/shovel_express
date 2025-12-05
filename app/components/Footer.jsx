"use client";

function Footer() {
  return (
    <footer className=" text-gray-400 py-12" style={{
          backgroundImage: "url('/snow.png')",
          // optional dark overlay ke liye:
          backgroundColor: "rgba(0,0,0,0.4)",
          backgroundBlendMode: "overlay",
        }} >
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4 text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            eveniet, eligendi velit facilis fugit dolorum libero! Nam ab quam
            unde?
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="/"
                className="hover:text-black text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-black text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="hover:text-black text-white transition-colors duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/gallery"
                className="hover:text-black text-white transition-colors duration-300"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-black text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-black text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-black text-white transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-black text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <div className="hover:text-black text-white">
          <p>Gurugram, India</p>
          <p>Gurugram 122002</p>
          <p>Email: info@theshovelexpress.com</p>
          <p>Phone: (123) 456-7890</p>

          </div>
        </div>
      </div>
      <p className="text-center text-white text-xs pt-8">
        © 2025 The Shovel Express. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
