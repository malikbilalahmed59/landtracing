import Image from "next/image";
import { CircleDollarSign,BookOpenCheck } from 'lucide-react';

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
        icon: <CircleDollarSign  size={30} className="text-[var(--cyan-blue)]"/>,
        image: {
            src: "/images/consultancy.jpg",
            alt: "Consultancy Service",
        },
    },
    {
        title: "Financial Planning",
        description:
            "We help you design customized financial strategies to grow your wealth and secure your future.",
        icon:     <BookOpenCheck size={30} className="text-[var(--cyan-blue)]"/>,
        image: {
            src: "/images/financial-planning.jpg",
            alt: "Financial Planning Service",
        },
    },
    {
        title: "Market Analysis",
        description:
            "Get detailed insights into market trends and customer behavior to stay ahead of the competition.",
        icon: <CircleDollarSign size={30} className="text-[var(--cyan-blue)]"/>,
        image: {
            src: "/images/market-analysis.jpg",
            alt: "Market Analysis Service",
        },
    },
];

const Services = () => {
    return (
        <section className="w-full pt-[120px] pb-[80px]">
            <div className="container mx-auto">
                <div className="bg-[url(/images/marketing-img.jpeg)] rounded-[20px] h-[450px] px-[40px] pb-[40px] mb-[20px]">
                    {/*<figure>*/}
                    {/*    <Image src={data.image.src} alt={data.image.alt} width={1920} height={453} className="rounded-[20px] h-[450px] object-cover"/>*/}
                    {/*</figure>*/}
                    <div className="flex items-end justify-between h-full text-white ">
                        <div>
                            <h3 className="text-[45px] font-medium leading-[58px] w-[65%]">{data.title}</h3>
                        </div>
                        <div>
                            <div className="font-semibold text-[28px] leading-[28px] mb-1">{data.experience.years}</div>
                            <span className="block text-sm">{data.experience.description}</span>
                        </div>
                    </div>
                </div>
                    <div className="grid grid-cols-3 gap-4">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white rounded-[20px] p-[30px]">
                                {/*<figure>*/}
                                {/*    <Image src={service.image.src} alt={service.image.alt} />*/}
                                {/*</figure>*/}
                                <div className="w-[78px] h-[78px] flex items-center justify-center bg-[#faf8f6] rounded-full mb-[20px]">
                                    {service.icon}
                                </div>
                                <h4 className="text-[24px] font-medium mb-[10px] text-[var(--primary)]">{service.title}</h4>
                                <p className="text-base text-[var(--primary)] leading-[22px]">{service.description}</p>
                            </div>
                        ))}
                    </div>
            </div>
        </section>
    )
}

export default Services
