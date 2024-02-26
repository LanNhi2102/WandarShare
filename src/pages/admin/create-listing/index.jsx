
import CreateListing from "@/components/dashboard/create-listing";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Add New TimeShare || WandarShare',
  description:
    'WandarShare',
}

const CreateListingPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <CreateListing />
    </>
  );
};

export default CreateListingPage;
