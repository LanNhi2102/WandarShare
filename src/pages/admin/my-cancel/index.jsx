
import MyCancel from "@/components/dashboard/my-cancel";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Cancel || WandarShare',
  description:
    'WandarShare',
}

const MyCancelPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <MyCancel />
    </>
  );
};

export default MyCancelPage;