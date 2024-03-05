
import Gallery from "@/components/gallery";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Gallery || WandarShare',
  description:
    'WandarShare',
}

const PageGallery = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Gallery />
    </>
  );
};

export default PageGallery
