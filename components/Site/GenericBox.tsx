import Image from "next/image";
import { NumberTicker } from "@/components/magicui/number-ticker";
interface Props {
    title: string,
    image:string,
    columnChange:string,
    description: string,
    countValue1: string,
    countValue2: string,
    countValue1dec: string,
    countValue2dec: string,
}

const GenericBox = ({title,description,image,countValue1,countValue2,countValue1dec,countValue2dec,columnChange}:Props) => {
    return (
        <div className="py-[120px]">
            <div className="container mx-auto">
                <div className={`flex justify-around items-center ${columnChange}`}>
                    <div className="w-[38.3%]">
                        <figure>
                            <Image src={image} alt="accountant_img" width={480} height={480} className="rounded-[20px]"/>
                        </figure>
                    </div>
                    <div className="w-[34%]">
                        <h3 className="font-semibold text-[42px] leading-[50px] mb-[40px]">{title}</h3>
                        <p className="text-base leading-[24px] mb-[76px]">{description}</p>
                        <div className="flex justify-between">
                            <div>
                                <div> <NumberTicker
                                    value={`${countValue1}`}
                                    className="whitespace-pre-wrap text-[24px] font-bold text-black "
                                /></div>
                                <span className="inline-block text-sm">{countValue1dec}</span>
                            </div>
                            <div>
                                <div> <NumberTicker
                                    value={`${countValue2}`}
                                    className="whitespace-pre-wrap text-[24px] font-bold text-black "
                                />
                                <span className="whitespace-pre-wrap text-[24px] font-bold text-black ">%</span>
                                </div>
                                <span className="inline-block text-sm">{countValue2dec}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GenericBox;
