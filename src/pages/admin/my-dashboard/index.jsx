
import MyDashboard from "@/components/dashboard/my-dashboard";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Dashboard || WandarShare',
  description:
    'WandarShare',
}


const MyDashboardPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <MyDashboard />
    </>
  );
};

export default MyDashboardPage;
