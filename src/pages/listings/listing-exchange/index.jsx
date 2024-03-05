
import GridV2 from "@/components/listing-grid/grid-v2";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Simple Listing – Grid V2 || WandarShare',
  description:
    'WandarShare',
}

const ListingExchange = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <GridV2 />
    </>
  );
};

export default ListingExchange
