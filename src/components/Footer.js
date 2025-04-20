import useFooter from "../utilities/useFooter";
const Footer = () =>{

    const [footerInfo, setFooterinfo] = useFooter();
    return(
        <div>
            footerInfo
        </div>
    );
};

export default Footer;