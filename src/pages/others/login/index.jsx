
import Login from "@/components/login";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Login || WandarShare',
  description:
    'WandarShare',
}

const LoginPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Login />
    </>
  );
};

export default LoginPage
