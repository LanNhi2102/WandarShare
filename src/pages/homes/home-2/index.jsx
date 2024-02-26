
import HomeMain from "@/components/home-2";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Home-2 || WandarShare',
  description:
    'WandarShare',
}

const HomePage2 = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <HomeMain />
    </>
  );
};

export default HomePage2
