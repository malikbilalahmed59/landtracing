import { BookOpenCheck, CircleDollarSign } from 'lucide-react';

const data = {
    image: {
        src: "/images/marketing-img.jpeg", // Add your image source here
        alt: "Strategic marketing visual",
        width: 600, // Add your preferred width
        height: 400, // Add your preferred height
    },
    title: "Driving Growth Through Strategic Marketing",
    experience: {
        years: "12 Years",
        description: "In accounting service",
    },
};
const services = [
    {
        title: "Consultancy",
        description:
            "Auditing advice helps you formulate your strategy for the future business diversifications and better Return on Investment (ROI).",
        icon: <CircleDollarSign size={30} className="text-[var(--cyan-blue)]" />,
        image: {
            src: "/images/consultancy.jpg",
            alt: "Consultancy Service",
        },
    },
    {
        title: "Financial Planning",
        description:
            "We help you design customized financial strategies to grow your wealth and secure your future.",
        icon: <BookOpenCheck size={30} className="text-[var(--cyan-blue)]" />,
        image: {
            src: "/images/financial-planning.jpg",
            alt: "Financial Planning Service",
        },
    },
    {
        title: "Market Analysis",
        description:
            "Get detailed insights into market trends and customer behavior to stay ahead of the competition.",
        icon: <CircleDollarSign size={30} className="text-[var(--cyan-blue)]" />,
        image: {
            src: "/images/market-analysis.jpg",
            alt: "Market Analysis Service",
        },
    },
];

const Services = () => {
    return (
        <section className="w-full 2xl:pt-[120px] xl:pt-[100px] lg:pt-[90px] sm:pt-[70px] pt-[50px] 2xl:pb-[80px] lg:pb-[70px] sm:pb-[50px] pb-[40px]">
            <div className="container mx-auto 2xl:px-0 sm:px-[30px] px-[20px]">
                <div data-aos="fade-up" className="bg-[url(/images/marketing-img.jpeg)] rounded-[20px] xl:h-[450px] md:h-[400px] sm:h-[350px] h-[400px] md:px-[40px] px-[20px] md:pb-[40px] pb-[20px] mb-[20px]">
                    {/*<figure>*/}
                    {/*    <Image src={data.image.src} alt={data.image.alt} width={1920} height={453} className="rounded-[20px] h-[450px] object-cover"/>*/}
                    {/*</figure>*/}
                    <div className="flex sm:items-end sm:justify-between justify-end h-full text-white sm:flex-row flex-col sm:gap-0 gap-4">
                        <div className="lg:w-[55%] sm:w-[75%]">
                            <h3 className="2xl:text-[45px] xl:text-[40px] lg:text-[36px]
                             md:text-[32px] sm:text-[28px] text-[24px] font-medium 2xl:leading-[58px] xl:leading-[48px] md:leading-[42px] leading-[30px] ">{data.title}</h3>
                        </div>
                        <div>
                            <div className="font-semibold xl:text-[28px] sm:text-[24px] text-[20px] sm:leading-[28px] leading-[20px] mb-1">{data.experience.years}</div>
                            <span className="block lg:text-sm text-[12px]">{data.experience.description}</span>
                        </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
                    {services.map((service, index) => (
                        <div data-aos="fade-up" key={index} className="bg-white rounded-[20px] p-[30px] border border-transparent hover:border-[var(--cyan-blue)] transition-all duration-300 ease-in-out group">
                            {/*<figure>*/}
                            {/*    <Image src={service.image.src} alt={service.image.alt} />*/}
                            {/*</figure>*/}
                            <div className="md:w-[78px] w-[68px] md:h-[78px] h-[68px] flex items-center justify-center bg-[#faf8f6] rounded-full mb-[20px]">
                                <span className="group-hover:translate-y-1/2 transition-all duration-300 ease-in-out">{service.icon}</span>
                            </div>
                            <h4 className="2xl:text-[24px] sm:text-[20px] text-[18px] font-medium mb-[10px] text-[var(--primary)]">{service.title}</h4>
                            <p className="md:text-base text-sm text-[var(--primary)] leading-[22px]">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
