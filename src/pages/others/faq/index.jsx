
import Faq from "@/components/faq";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Faq || WandarShare',
  description:
    'WandarShare',
}

const FaqPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Faq />
    </>
  );
};

export default FaqPage
