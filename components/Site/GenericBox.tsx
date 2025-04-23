import Image from "next/image";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
interface Props {
    title: string,
    image: string | StaticImport,
    columnChange: string,
    description: string,
    countValue1: string,
    countValue1dec: string,
    countValue2dec: React.ReactNode,
}

const GenericBox = ({ title, description, image, countValue1, countValue1dec, countValue2dec, columnChange }: Props) => {
    return (
        <div className="2xl:py-[120px]  xl:py-[100px] lg:py-[90px] sm:py-[70px] py-[50px]">
            <div className="container mx-auto 2xl:px-0 sm:px-[30px] px-[20px]">
                <div className={`flex md:flex-nowrap md:gap-0 gap-5 flex-wrap lg:justify-around justify-between items-center md:text-left text-center ${columnChange}`}>
                    <div className="lg:w-[38.3%] md:w-[48%] w-full">
                        <figure data-aos="fade-up">
                            <Image src={image} alt="accountant_img" width={480} height={480} className="rounded-[20px] md:mx-0 mx-auto" />
                        </figure>
                    </div>
                    <div className="xl:w-[34%] lg:w-[42%] md:w-[46%] w-full">
                        <h3 data-aos="fade-up" className="font-semibold 2xl:text-[42px] xl:text-[36px] lg:text-[32px] md:text-[28px] sm:text-[26px] text-[24px]
                         2xl:leading-[50px] xl:leading-[44px] lg:leading-[40px] sm:leading-[36px] leading-[30px] 2xl:mb-[40px] xl:mb-[30px] md:mb-[20px] mb-[14px]">{title}</h3>
                        <p data-aos="fade-up" className="sm:text-base text-sm leading-[24px] 2xl:mb-[76px] xl:mb-[56px] md:mb-[46px] sm:mb-[26px] mb-[18px]">{description}</p>
                        <div className="flex md:justify-between justify-center md:gap-0 gap-6">
                            <div data-aos="fade-up">
                                <div> <NumberTicker
                                    value={parseInt(countValue1)}
                                    className="whitespace-pre-wrap lg:text-[24px] text-[20px] font-bold text-black "
                                /></div>
                                <span className="inline-block lg:text-sm text-[12px]">{countValue1dec}</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GenericBox;
