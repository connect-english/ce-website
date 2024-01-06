import React, { FC } from 'react'

type Props = {}

const FormHero: FC<Props> = () => {
  return (
    <div className='w-full'>
      <form action="">
        <input type="text" placeholder="Your Name" className="w-full mb-2 input input-bordered " />
        <input type="email" placeholder="email" className="w-full mb-2 input input-bordered" />
        <button className='w-full p-2 bg-ce-pink rounded-xl text-ce-white'>Get more details</button>
      </form>
    </div>
  )
}

export default FormHero