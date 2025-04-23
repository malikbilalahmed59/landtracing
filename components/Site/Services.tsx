import { MapPinned, Waves, Satellite } from "lucide-react";
import Image from "next/image";
import landMappingImage from "@/public/images/land-mapping.jpg"; // static import prevents URL errors

const data = {
    title: "Precision Land Mapping & Reports",
    experience: {
        years: "15+ Years",
        description: "In Land Records & Mapping Services",
    },
};

const services = [
    {
        title: "Tideland Searches (New Jersey)",
        description:
            "Our expert team delivers certified tideland search reports for properties in New Jersey. Utilizing advanced GIS mapping technology and extensive industry experience, we ensure accurate, fast, and reliable results.",
        icon: <MapPinned size={30} className="text-[var(--cyan-blue)]" />,
    },
    {
        title: "Flood Zone Determination (Coming Soon)",
        description:
            "Our upcoming Flood Zone Determination service will provide detailed mapping, data-driven analysis, and certified accuracy to keep you informed and prepared.",
        icon: <Waves size={30} className="text-[var(--cyan-blue)]" />,
    },
    {
        title: "Property PEEK (Aerial Insights)",
        description:
            "Our comprehensive and customizable Property PEEK Deluxe reports offer extensive aerial data and metrics, tailored specifically for New Jersey properties.",
        icon: <Satellite size={30} className="text-[var(--cyan-blue)]" />,
    },
];

const Services = () => {
    return (
        <section id="services" className="w-full 2xl:pt-[120px] xl:pt-[100px] lg:pt-[90px] sm:pt-[70px] pt-[50px] 2xl:pb-[80px] lg:pb-[70px] sm:pb-[50px] pb-[40px]">
            <div className="container mx-auto 2xl:px-0 sm:px-[30px] px-[20px]">

                {/* Hero image + overlay text */}
                <div className="relative rounded-[20px] overflow-hidden xl:h-[450px] md:h-[400px] sm:h-[350px] h-[400px] mb-[20px]">
                    <Image
                        src={landMappingImage}
                        alt="Land Mapping Expert Visual"
                        fill
                        className="object-cover rounded-[20px]"
                        priority
                    />
                    <div className="absolute inset-0 flex sm:items-end sm:justify-between justify-end h-full text-white sm:flex-row flex-col sm:gap-0 gap-4 px-[20px] md:px-[40px] pb-[20px] md:pb-[40px] z-10 bg-black/40">
                        <div className="lg:w-[55%] sm:w-[75%]">
                            <h3 className="2xl:text-[45px] xl:text-[40px] lg:text-[36px] md:text-[32px] sm:text-[28px] text-[24px] font-medium 2xl:leading-[58px] xl:leading-[48px] md:leading-[42px] leading-[30px]">
                                {data.title}
                            </h3>
                        </div>
                        <div>
                            <div className="font-semibold xl:text-[28px] sm:text-[24px] text-[20px] sm:leading-[28px] leading-[20px] mb-1">
                                {data.experience.years}
                            </div>
                            <span className="block lg:text-sm text-[12px]">{data.experience.description}</span>
                        </div>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
                    {services.map((service, index) => (
                        <div
                            data-aos="fade-up"
                            key={index}
                            className="bg-white rounded-[20px] p-[30px] border border-transparent hover:border-[var(--cyan-blue)] transition-all duration-300 ease-in-out group"
                        >
                            <div className="md:w-[78px] w-[68px] md:h-[78px] h-[68px] flex items-center justify-center bg-[#faf8f6] rounded-full mb-[20px]">
                                <span className="group-hover:translate-y-1/2 transition-all duration-300 ease-in-out">
                                    {service.icon}
                                </span>
                            </div>
                            <h4 className="2xl:text-[24px] sm:text-[20px] text-[18px] font-medium mb-[10px] text-[var(--primary)]">
                                {service.title}
                            </h4>
                            <p className="md:text-base text-sm text-[var(--primary)] leading-[22px]">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
