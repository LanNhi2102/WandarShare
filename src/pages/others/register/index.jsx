
import SignUp from "@/components/register";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'SignUp || WandarShare',
  description:
    'WandarShare',
}

const RegisterPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <SignUp />
    </>
  );
};

export default RegisterPage
