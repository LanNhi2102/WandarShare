
import GridV1 from "@/components/listing-grid/grid-v1";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Simple Listing – Grid V1 || WandarShare',
  description:
    'WandarShare',
}

const ListingGridPage1 = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <GridV1 />
    </>
  );
};

export default ListingGridPage1
