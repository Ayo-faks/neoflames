import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Our Vision
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                We envision a future where technology serves as a catalyst for positive change. Our vision is to empower humanity by developing cutting-edge legal and health products and services that are accessible, efficient, and user-friendly. Through the integration of artificial intelligence and advanced technologies, we aim to simplify complex processes, break down barriers, and transform the way individuals navigate the legal and healthcare landscapes.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Leading the Way in Legal Innovation
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                At Neoflames, we understand that legal matters can be overwhelming and time-consuming. That's why we have developed a suite of groundbreaking legal products and services designed to streamline the legal experience. Our flagship product, "Legalia," leverages the power of AI to ease the burden and pain of legal research, provide personalized legal write ups, search for relevant case law and offer assistance to legal practitioners. By utilizing advanced algorithms and natural language processing, Legalia analyzes vast databases of legal information to generate accurate and tailored legal solutions. 


                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Transforming Healthcare with AI
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  
Healthcare is another area where Neoflames is making a significant impact. We believe that everyone should have access to quality healthcare services and the tools to proactively manage their well-being. Our team has developed "NeoCareAI," an intelligent health assistant that harnesses advanced algorithms to analyze vast amount health data to enable doctor extract insights to help in diagnoses and tretaments of diseases. NeoCareAI provides also personalized health recommendations, early detection of potential health issues, and real-time monitoring, empowering individuals to take control of their health and lead healthier lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
