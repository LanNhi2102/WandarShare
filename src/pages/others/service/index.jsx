
import Service from "@/components/service";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Service || WandarShare',
  description:

  'WandarShare - Timeshare',


const ServicePage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Service />
    </>
  );
};

export default ServicePage
