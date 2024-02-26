
import HomeMain from "@/components/home-9";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Home-9 || WandarShare',
  description:
    'WandarShare',
}

const HomePage9 = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <HomeMain />
    </>
  );
};

export default HomePage9
