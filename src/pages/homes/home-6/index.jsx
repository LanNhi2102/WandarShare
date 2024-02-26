
import HomeMain from "@/components/home-6";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Home-6 || WandarShare',
  description:
    'WandarShare',
}

const HomePage6 = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <HomeMain />
    </>
  );
};

export default HomePage6
