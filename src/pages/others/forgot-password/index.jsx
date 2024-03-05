
import Forgot from "@/components/forgot-password/index";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Forgot Password || WandarShare',
  description:
    'WandarShare',
}

const forgotPasswordPage = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <Forgot />
    </>
  );
};

export default forgotPasswordPage
