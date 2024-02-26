
import Membership from "@/components/membership";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Membership || WandarShare',
  description:
    'WandarShare',
}

const MembershipPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Membership />
    </>
  );
};

export default MembershipPage
