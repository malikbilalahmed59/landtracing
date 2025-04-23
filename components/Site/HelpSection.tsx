import GenericHeading from "@/components/Site/GenericHeading";

const HelpSection = () => {
    return (
        <div className="bg-[var(--cyan-blue)] xl:py-[60px] lg:py-[50px] py-[40px]">
            <div className="container mx-auto 2xl:px-0 sm:px-[30px] px-[20px]">
                <GenericHeading
                    title={"Need Certified Mapping or Land Search Support?"}
                    linkTitle={"Get Started Now"}
                    linkHref={"#contact"}
                />
            </div>
        </div>
    );
};

export default HelpSection;