import GoogleMap from "../components/GoogleMap";
import StudentSliderAgain from "../components/StudentSliderAgain";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <div className="max-w-6xl mx-auto px-4 pt-40 sm:px-6 lg:px-8 py-12">
        <section className="max-w-3xl mx-auto text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-black">
            ABOUT <span className="text-blue-600">The Shovel Express</span>
          </h2>
          <p className="text-black mb-4 text-sm sm:text-base leading-relaxed">
            <span className="font-semibold">The Shovel Express</span>, We
            provide dependable snow removal services for homes, businesses, and
            commercial properties. Our mission is to keep Edmonton snow-free,
            safe, and accessible all winter long.
          </p>
          {/* <p className="text-black text-sm sm:text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            aspernatur nisi, officia, quidem ullam voluptate est repudiandae
            quisquam, odio ab a dolorum ratione expedita voluptatem recusandae
            eum possimus maxime atque?
          </p> */}
        </section>
      </div>

      <section className="m-10 rounded-3xl shadow-lg shadow-blue-300/40"
        style={{
          backgroundImage: "url('/snow_fram.png')",
          // optional dark overlay ke liye:
          backgroundColor: "rgba(0,0,0,0.4)",
          backgroundBlendMode: "overlay",
          backgroundSize: "cover",
          backgroundPosition: "center",
          
        }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 sm:px-6 lg:px-8 py-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              Why customers <span className="text-blue-200">choose us:</span>
            </h3>
            {/* <p className="text-white mb-4 text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi modi
              pariatur expedita rem? Quo, ullam.:
            </p> */}

            <ul className="list-disc pl-6 text-white space-y-2 text-sm sm:text-base">
              <li>Fast response times</li>
              <li>Affordable seasonal contracts</li>
              <li>Professional-grade tools and equipment</li>
              <li>Residential & commercial specialists</li>
              <li>Fully insured and safety-focused</li>
              
            </ul>
          </div>

          <div className="flex items-center justify-center">
            <img
              src="/logo2.0.png"
              alt="the shovel express"
              className="rounded-lg shadow-lg w-40 sm:w-56 md:w-64 lg:w-72 object-contain"
            />
          </div>
        </div>
      </section>

      <FAQ />
      <StudentSliderAgain />
      {/* <GoogleMap src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE" /> */}
    </main>
  );
}
