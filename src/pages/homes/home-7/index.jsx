
import HomeMain from "@/components/home-7";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Home-7 || WandarShare',
  description:
    'WandarShare',
}

const HomePage7 = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <HomeMain />
    </>
  );
};

export default HomePage7
