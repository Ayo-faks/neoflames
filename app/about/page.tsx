import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="At Neoflames, we are passionate about harnessing the power of technology to create innovative solutions that make life easier for humanity. As an AI startup company, our mission is to revolutionize the way people interact with legal and health services, ultimately enhancing the overall well-being of individuals and communities.."
      />
      {/* <AboutSectionOne /> */}
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
