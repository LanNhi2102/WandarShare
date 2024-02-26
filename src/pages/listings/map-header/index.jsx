
import MapHeader from "@/components/listing-style/map-header";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Listing - Map Header || WandarShare',
  description:
    'WandarShare',
}

const MapHeaderPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <MapHeader />
    </>
  );
};

export default MapHeaderPage
