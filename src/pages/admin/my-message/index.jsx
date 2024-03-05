
import MyMessage from "@/components/dashboard/my-message";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'My Message || WandarShare',
  description:
    'WandarShare',
}

const MyMessagePage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <MyMessage />
    </>
  );
};

export default MyMessagePage;
