import GenericBox from "@/components/Site/GenericBox";
import mapping_expert_img from "@/public/images/mapping-expert.jpg";

const TrustSection = () => {
    return (
        <GenericBox
            columnChange=""
            title={"Trusted by Professionals in Land Mapping & Search"}
            image={mapping_expert_img}
            description={"Land Tracing is the go-to partner for certified property research, GIS-based reports, and land data services. Our clients rely on our accuracy, speed, and deep domain expertise to support critical land decisions across New Jersey and beyond."}
            countValue1={"1000+"}
            countValue2={"99.5%"}
            countValue1dec={"Certified Reports Delivered"}
            countValue2dec={"Accuracy Rating from Clients"} />
    );
};

export default TrustSection;
