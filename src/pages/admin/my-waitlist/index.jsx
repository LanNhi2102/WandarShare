
import MyWaitlist from "@/components/dashboard/my-waitlist";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'My Waitlist Requests || WandarShare',
  description:
    'WandarShare',
}

const MyWaitlistPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <MyWaitlist />
    </>
  );
};

export default MyWaitlistPage
