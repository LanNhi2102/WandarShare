
import MyProperties from "@/components/dashboard/my-properties";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'My Properties || WandarShare',
  description:
    'WandarShare',
}

const MyPropertiesPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <MyProperties />
    </>
  );
};

export default MyPropertiesPage;
