import  { FC } from 'react'
import { FaClock } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi2";

import whyChooseUs from "../../assets/bg/whyChooseUs.png"

type Props = object

const WhyCw:FC<Props> = () => {
  return (
    <div className='w-full bg-ce-white '>
        <div className='w-full px-5 mt-5 md:mt-20'>
            <div className='flex items-center justify-center md:hidden'>
                <img src={ whyChooseUs } alt="" />
            </div>
          <div className='p-5 mb-5'>
              <h1 className='text-4xl font-bold text-center text-ce-blue'>Why Connect English?</h1>
              <p className='text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className='lg:px-32'>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              <div className='flex items-center w-full col-span-3 md:col-span-1'>
                <div className='w-full'>
                  <div 
                      className="w-full p-5 transition duration-700 ease-in-out border shadow-xl border-ce-gray hover:scale-110 card card-compact bg-ce-pink md:bg-ce-white">
                    <figure>
                      <FaClock className='text-5xl text-ce-white md:text-ce-blue' />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-ce-white md:text-ce-blue">Lorem Ipsum is simply</h2>
                      <p className= ' text-ce-white md:text-ce-gray'>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                  </div>

                  <div className="w-full p-5 mt-5 transition duration-700 ease-in-out border shadow-xl border-ce-gray hover:scale-110 md:mt-10 card card-compact bg-ce-white md:bg-ce-pink">
                    <figure>
                      <HiDocumentText className='text-5xl text-ce-blue md:text-ce-white' />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-ce-blue md:text-ce-white">Lorem Ipsum is simply</h2>
                      <p className='text-ce-blue md:text-ce-white'>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='items-center justify-center hidden md:flex'>
                <img className='' src={ whyChooseUs } alt="" />
              </div>
              <div className='flex items-center w-full col-span-3 md:col-span-1'>
                <div className='w-full'>
                  <div className="w-full p-5 transition duration-700 ease-in-out border shadow-xl hover:scale-110 border-ce-gray card card-compact bg-ce-pink">
                    <figure>
                      <FaClock className='text-5xl text-ce-white' />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-ce-white">Lorem Ipsum is simply</h2>
                      <p className='text-ce-white'>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                  </div>

                  <div className="w-full p-5 mt-5 transition duration-700 ease-in-out border shadow-xl card card-compact border-ce-gray hover:scale-110 md:mt-10 bg-ce-white">
                    <figure>
                      <FaClock className='text-5xl text-ce-blue' />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-ce-blue">Lorem Ipsum is simply</h2>
                      <p className='text-ce-gray'>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default WhyCw