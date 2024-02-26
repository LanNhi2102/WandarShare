
import Compare from "@/components/compare";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Compare || WandarShare',
  description:
    'WandarShare',
}

const ComparePage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Compare />
    </>
  );
};

export default ComparePage
