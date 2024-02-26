
import SliderStyle from "@/components/listing-style/slider-style";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Listing - Slider Style || WandarShare',
  description:
    'WandarShare',
}

const SliderStylePage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <SliderStyle />
    </>
  );
};

export default SliderStylePage
