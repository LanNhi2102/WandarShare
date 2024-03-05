
import AboutUs from "@/components/about-us";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'About Us || WandarShare',
  description:

  'WandarShare - Timeshare',

const AboutUsPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <AboutUs />
    </>
  );
};

export default AboutUsPage
