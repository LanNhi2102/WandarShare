
import HomeMain from "@/components/home";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'WandarShare',
  description:
    'WandarShare',
}

const HomePage1 = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <HomeMain />
    </>
  );
};

export default HomePage1
