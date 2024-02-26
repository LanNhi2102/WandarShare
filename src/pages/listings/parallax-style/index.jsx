
import ParallaxStyle from "@/components/listing-style/parallax-style";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Listing - Parallax Style || WandarShare',
  description:
    'WandarShare',
}

const ParallaxStylePage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <ParallaxStyle />
    </>
  );
};

export default ParallaxStylePage
