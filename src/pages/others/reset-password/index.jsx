
import ResetPassword from "@/components/reset-password/index";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Reset Password || WandarShare',
  description:
    'WandarShare',
}

const forgotPasswordPage = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <ResetPassword />
    </>
  );
};

export default forgotPasswordPage
