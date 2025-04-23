import GenericBox from "@/components/Site/GenericBox";
import accountant_img from  "@/public/images/accountant-img.jpg"

const TrustSection = () => {
    return (
        <GenericBox
            columnChange={"flex-row-reverse"}
                title={"We provide expert advice for all size businesses"}
                    image={accountant_img}
                    description={"Whether you're a startup or an established enterprise, our tailored expert advice is designed to meet the unique needs of businesses at any scale, ensuring your growth."}
                    countValue1={"80"}
                    countValue2={"95"}
                    countValue1dec={"Industries Served"}
                    countValue2dec={"Client satisfaction rate."}/>
    );
};

export default TrustSection;
