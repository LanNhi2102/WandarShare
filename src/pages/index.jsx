import Wrapper from "@/components/layout/Wrapper";
import HomeMain from './homes/home-1'
import MetaComponent from "@/components/common/MetaComponent";


const metadata = {

  title: 'Homepage || WandarShare',
  description:
    'WandarShare - Timeshare',


export default function Home() {
  return (
    <Wrapper>
      <MetaComponent meta={metadata} />
      <HomeMain />
    </Wrapper>

  )
}
