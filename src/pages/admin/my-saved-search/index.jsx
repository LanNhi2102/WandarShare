
import MySavedSearch from "@/components/dashboard/my-saved-search";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'My Saved Search || WandarShare',
  description:
    'WandarShare',
}

const MySavedSearchPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <MySavedSearch />
    </>
  );
};

export default MySavedSearchPage
