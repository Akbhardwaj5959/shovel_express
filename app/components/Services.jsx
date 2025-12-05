import Image from "next/image";
import services from "@/data/classes.json";

export default function Services() {
  return (
    <div className="space-y-16 px-4 md:px-12 py-12">
      {services.map((service, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center gap-8 border-y py-10 
          ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
        >
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl text-blue-800 font-bold">{service.title}</h2>
            <p className="mt-4 text-black leading-relaxed text-base md:text-lg">
              {service.description}
            </p>
          </div>

          <div className="flex-1 flex justify-center">
            <Image
              src={service.image}
              alt={service.title}
              width={350}
              height={300}
              className="rounded-lg object-contain max-h-[250px] w-auto"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
