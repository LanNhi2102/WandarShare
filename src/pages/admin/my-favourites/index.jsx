
import MyFavourites from "@/components/dashboard/my-favourites";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'My Favourites || WandarShare',
  description:
    'WandarShare',
}


const MyFavouritePage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <MyFavourites />
    </>
  );
};

export default MyFavouritePage;
