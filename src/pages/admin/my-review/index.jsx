
import MyReview from "@/components/dashboard/my-review";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'My Review || WandarShare',
  description:
    'WandarShare',
}

const MyReviewPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <MyReview />
    </>
  );
};

export default MyReviewPage
