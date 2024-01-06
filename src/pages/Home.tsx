import React, { FC } from 'react'
import Hero from '../components/hero/Hero'
import WhyCw from '../components/whyce/WhyCw'

type Props = {}

const Home:FC<Props> = () => {
  return (
    <div>
        <Hero />
        <WhyCw />
    </div>
  )
}

export default Home