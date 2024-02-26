
import Terms from "@/components/terms-conditions";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Terms & Conditions || WandarShare',
  description:
    'WandarShare',
}

const TermsPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Terms />
    </>
  );
};

export default TermsPage
