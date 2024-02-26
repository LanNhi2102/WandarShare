
import HomeMain from "@/components/home-10";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Home-10 || WandarShare',
  description:
    'WandarShare',
}

const HomePage10 = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <HomeMain />
    </>
  );
};

export default HomePage10
