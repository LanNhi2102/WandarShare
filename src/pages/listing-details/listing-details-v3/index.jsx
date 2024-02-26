
import ListingDetailsV3 from "@/components/listing-details-v3";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Listing Single – Details V3 || WandarShare',
  description:
    'WandarShare',
}

const ListingDetailsPage3 = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <ListingDetailsV3 />
    </>
  );
};

export default ListingDetailsPage3
