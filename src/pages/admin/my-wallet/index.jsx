
import MySavedSearch from "@/components/dashboard/my-wallet";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'My Wallet || WandarShare',
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
