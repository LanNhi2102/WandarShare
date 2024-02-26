
import ListingDetailsV4 from "@/components/listing-details-v4";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Listing Single – Details V4 || WandarShare',
  description:
    'WandarShare',
}

const ListingDetailsPage4 = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <ListingDetailsV4 />
    </>
  );
};

export default ListingDetailsPage4
