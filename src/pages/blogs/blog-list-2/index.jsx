
import BlogV2 from "@/components/blog-list-2";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Blog List 2 || WandarShare',
  description:
    'WandarShare',
}

const Blog2Page = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <BlogV2 />
    </>
  );
};

export default Blog2Page
