
import MyProfile from "@/components/dashboard/my-profile";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'My Profile || WandarShare',
  description:
    'WandarShare',
}

const MyProfilePage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <MyProfile />
    </>
  );
};

export default MyProfilePage;
