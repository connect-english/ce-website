import { FC } from 'react'
import Hero from '../components/hero/Hero'
import WhyCw from '../components/whyce/WhyCw'
import { IoStar } from "react-icons/io5";
import VisionMision from '../components/vision-mision/VisionMision'

type Props = object

const Home:FC<Props> = () => {
  return (
    <div>
        <Hero />
        <WhyCw />
        {/* <CountrySection /> */}
        {/* <Speciality /> */}
        {/* <SectionFive /> */}
        <div 
          className="px-5 py-20 text-6xl divider text-ce-blue lg:px-32">
              {< IoStar />}
          </div>
        <VisionMision />
    </div>
  )
}

export default Home