import GenericBox from "@/components/Site/GenericBox";
import accountant_img from  "@/public/images/accountant-img.jpg"

const TrustSection = () => {
    return (
        <GenericBox
                title={"Trust With Our Best Accountants"}
                    image={accountant_img}
                    description={"Invess is the number one accounting & finance back office support provider in the market. We're pride of ourselves on transforming our clients for the better, helping them to grow & making them more resilient to in the business."}
                    countValue1={"500"}
                    countValue2={"98"}
                    countValue1dec={"Successful audits"}
                    countValue2dec={"On-Time Filing Rate"}/>
    );
};

export default TrustSection;
