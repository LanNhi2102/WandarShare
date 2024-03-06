
import MyHistory from "@/components/dashboard/my-history";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'My History || WandarShare',
  description:
    'WandarShare',
}

const MyHistoryPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <MyHistory />
    </>
  );
};

export default MyHistoryPage
