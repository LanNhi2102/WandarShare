
import HomeMain from "@/components/home-5";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Home-5 || WandarShare',
  description:
    'WandarShare',
}

const HomePage5 = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <HomeMain />
    </>
  );
};

export default HomePage5
