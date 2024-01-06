import React, { FC } from 'react'
import { FaClock } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi2";

import whyChooseUs from "../../assets/bg/whyChooseUs.png"

type Props = {}

const WhyCw:FC<Props> = () => {
  return (
    <div className='bg-ce-white w-full '>
        <div className='w-full mt-20 px-5'>
          <div className='p-5 mb-5'>
              <h1 className='text-4xl text-center text-ce-blue font-bold'>Why Connect English?</h1>
              <p className='text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className='md:px-32'>
            <div className="grid grid-cols-3 gap-4">
              <div className='flex items-center w-full col-span-3 md:col-span-1'>
                <div className='w-full'>
                  <div className="card card-compact bg-base-100 shadow-xl w-full p-5">
                    <figure>
                      <FaClock className='text-5xl text-ce-blue' />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-ce-blue">Lorem Ipsum is simply</h2>
                      <p className='text-ce-gray'>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                  </div>

                  <div className="card card-compact bg-base-100 shadow-xl w-full p-5 mt-10  bg-ce-pink">
                    <figure>
                      <HiDocumentText className='text-5xl text-ce-white' />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-ce-white">Lorem Ipsum is simply</h2>
                      <p className='text-ce-white'>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-center'>
                <img src={ whyChooseUs } alt="" />
              </div>
              <div className='flex items-center w-full col-span-3 md:col-span-1'>
                <div className='w-full'>
                  <div className="card card-compact shadow-xl w-full p-5 bg-ce-pink">
                    <figure>
                      <FaClock className='text-5xl text-ce-white' />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-ce-white">Lorem Ipsum is simply</h2>
                      <p className='text-ce-white'>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                  </div>

                  <div className="card card-compact bg-base-100 shadow-xl w-full p-5 mt-10">
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