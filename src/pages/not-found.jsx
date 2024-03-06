



import NotFound from "@/components/404";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: '404 Not Found || WandarShare',
  description:

    'WandarShare - Timeshare',
}

const NotFoundPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <NotFound />
    </>
  );
};

export default NotFoundPage;
