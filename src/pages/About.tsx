import { FC } from 'react'
import AboutAuCom from '../components/aboutUs/AboutAuCom'

type Props = object

const About:FC<Props> = () => {
  return (
    <div className='w-full'>
      <AboutAuCom />
    </div>
  )
}

export default About