
import GridV4 from "@/components/listing-grid/grid-v4";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Simple Listing – Grid V4 || WandarShare',
  description:
    'WandarShare',
}

const ListingGridPage4 = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <GridV4 />
    </>
  );
};

export default ListingGridPage4
