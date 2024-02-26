
import ListingMapV3 from "@/components/listing-half-map/listing-map-v3";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Listing - Map V3 || WandarShare',
  description:
    'WandarShare',
}

const ListingMapPage3 = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <ListingMapV3 />
    </>
  );
};

export default ListingMapPage3
