import Wrapper from "@/components/layout/Wrapper";
import HomeMain from './homes/home-1'
import MetaComponent from "@/components/common/MetaComponent";


const metadata = {
  title: 'Home-1 || WandarShare',
  description:
    'WandarShare',
}

export default function Home() {
  return (
    <Wrapper>
      <MetaComponent meta={metadata} />
      <HomeMain />
    </Wrapper>

  )
}
