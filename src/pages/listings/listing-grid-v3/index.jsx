
import GridV3 from "@/components/listing-grid/grid-v3";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Simple Listing – Grid V3 || WandarShare',
  description:
    'WandarShare',
}

const ListingGridPage3 = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <GridV3 />
    </>
  );
};

export default ListingGridPage3
