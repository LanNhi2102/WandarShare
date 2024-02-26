
import MyPackage from "@/components/dashboard/my-package";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'My Package || WandarShare',
  description:
    'WandarShare',
}

const MyPackagepage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <MyPackage />
    </>
  );
};

export default MyPackagepage;
