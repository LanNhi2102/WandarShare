
import HomeMain from "@/components/home-8/Home8";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Home-8 || WandarShare',
  description:
    'WandarShare',
}

const HomePage8 = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <HomeMain />
    </>
  );
};

export default HomePage8
