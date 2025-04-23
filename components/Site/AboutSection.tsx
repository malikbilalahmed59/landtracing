import GenericBox from "@/components/Site/GenericBox";
import mapping_expert_img from "@/public/images/mapping-expert1.jpg";

const TrustSection = () => {
    return (
        <section id="trust">
            <GenericBox
                columnChange="flex-row-reverse"
                title={"What is Tidelands?"}
                image={mapping_expert_img}
                description={
                    "Tidelands, also known as riparian lands, are areas now or formerly flowed by the mean high tide of a natural waterway. In New Jersey, the State owns these lands and any interest in them must be evaluated before development or transfer. A tideland search identifies if a property lies on or near such lands and whether a State Tidelands Claim exists. This is crucial for real estate transactions, development planning, and ensuring compliance with environmental regulations.\n\nIf a claim is identified, we proceed with a comprehensive Grant Search to determine if a tidelands grant was issued by the State. This helps clarify ownership, encumbrances, and the legal status of the land."
                }
                countValue1={"500+"}
                countValue2={"100%"}
                countValue1dec={"Tideland Claims Identified"}
                countValue2dec={"Compliance Assurance"}
            />
        </section>
    );
};

export default TrustSection;
