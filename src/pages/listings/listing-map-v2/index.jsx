
import ListingMapV2 from "@/components/listing-half-map/listing-map-v2";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Listing - Map V2 || WandarShare',
  description:
    'WandarShare',
}

const ListingMapPage2 = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <ListingMapV2 />
    </>
  );
};

export default ListingMapPage2
