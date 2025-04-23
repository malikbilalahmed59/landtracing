import GenericHeading from "@/components/Site/GenericHeading";

const CallAction = () => {
    return (
        <div className="bg-[var(--cyan-blue)] xl:py-[60px] lg:py-[50px] py-[40px]">
            <div className="container mx-auto 2xl:px-0 sm:px-[30px] px-[20px]">
                <GenericHeading 
                    title={"Want to see how our certified reports look?"} 
                    linkTitle={"Download Sample Report"} 
                    linkHref={"/sample-report.pdf"} 
                />
            </div>
        </div>
    );
};

export default CallAction;
