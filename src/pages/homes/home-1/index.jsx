
import HomeMain from "@/components/home";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Homepage || WandarShare',
  description:
    'WandarShare - Timeshare',
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
