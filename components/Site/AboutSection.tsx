import mapping_expert_img from "@/public/images/mapping-expert1.jpg";
import { ShieldCheck } from "lucide-react";
import Image from "next/image";

const TrustSection = () => {
    return (
        <section id="trust" className="w-full bg-[var(--light-color)] 2xl:py-[120px] xl:py-[100px] lg:py-[90px] sm:py-[70px] py-[50px]">
            <div className="container mx-auto 2xl:px-0 sm:px-[30px] px-[20px]">
                <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-8">
                    <div className="md:w-[50%] w-full">
                        <figure data-aos="fade-up">
                            <Image
                                src={mapping_expert_img}
                                alt="Land Mapping Expert"
                                width={500}
                                height={500}
                                className="rounded-[20px] w-full h-auto"
                            />
                        </figure>
                    </div>
                    <div className="md:w-[46%] w-full">
                        <h2 data-aos="fade-up" className="font-semibold text-[28px] sm:text-[32px] lg:text-[36px] leading-tight mb-4">
                            What is Tidelands?
                        </h2>
                        <p data-aos="fade-up" className="text-sm sm:text-base leading-6 mb-6">
                            Tidelands, also known as riparian lands, are areas now or formerly flowed by the mean high tide of a natural waterway. In New Jersey, the State owns these lands and any interest in them must be evaluated before development or transfer. A tideland search identifies if a property lies on or near such lands and whether a State Tidelands Claim exists. This is crucial for real estate transactions, development planning, and ensuring compliance with environmental regulations.
                        </p>
                        <p data-aos="fade-up" className="text-sm sm:text-base leading-6 mb-6">
                            If a claim is identified, we proceed with a comprehensive Grant Search to determine if a tidelands grant was issued by the State. This helps clarify ownership, encumbrances, and the legal status of the land.
                        </p>
                        <div data-aos="fade-up" className="flex items-center gap-3 text-[var(--primary)] font-semibold">
                            <ShieldCheck size={24} className="text-[var(--cyan-blue)]" />
                            <span>Our searches are certified and insured</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
