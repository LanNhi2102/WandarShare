
import HomeMain from "@/components/home-3/Home3";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Home-3 || WandarShare',
  description:
    'WandarShare',
}

const HomePage3 = () => {
  return (
    <>
      <MetaComponent meta={metadata} />

      <HomeMain />
    </>
  );
};

export default HomePage3
