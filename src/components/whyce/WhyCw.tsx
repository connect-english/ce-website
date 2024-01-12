import { FC } from 'react'

import { IoGlobeOutline } from "react-icons/io5";
import { PiStudentBold } from "react-icons/pi";
import { TbRoad } from "react-icons/tb";
import { MdOutlineVideoCameraFront } from "react-icons/md";

import whyChooseUs from "../../assets/bg/whyChooseUs.png"

type Props = object

const WhyCw: FC<Props> = () => {
  return (
    <div className='w-full bg-ce-white '>
      <div className='w-full px-5 mt-5 md:mt-20'>
        <div className='flex items-center justify-center md:hidden'>
          <img src={whyChooseUs} alt="" />
        </div>
        <div className='p-5 mb-5'>
          <h1 className='text-4xl font-bold text-center text-ce-blue'>Why Connect English?</h1>
          {/* <p className='text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> */}
        </div>
        <div className='lg:px-32'>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            <div className='flex items-center w-full col-span-3 lg:col-span-1'>
              <div className='w-full '>
                <div
                  className="w-full h-auto p-2 transition duration-700 ease-in-out border shadow-xl md:h-80 border-ce-gray hover:scale-110 card card-compact bg-ce-pink md:bg-ce-white">
                  <figure>
                    <PiStudentBold className='text-5xl text-ce-white md:text-ce-blue' />
                  </figure>
                  <div className="card-body">
                    <h2 className="text-center text-ce-white md:text-ce-blue md:text-xl">Student Life</h2>
                    <p className='mt-5 lg:text-base text-ce-white md:text-ce-gray md:text-xl'>Connect English is not just an educational platform; it's a community that fosters holistic development. Connect with a network of like-minded individuals. Your journey with Connect English goes beyond academics!</p>
                  </div>
                </div>

                <div className="w-full h-auto p-2 mt-5 transition duration-700 ease-in-out border shadow-xl md:h-80 border-ce-gray hover:scale-110 md:mt-5 card card-compact bg-ce-white md:bg-ce-pink">
                  <figure>
                    <TbRoad className='text-5xl text-ce-blue md:text-ce-white' />
                  </figure>
                  <div className="card-body">
                    <h2 className="text-center text-ce-blue md:text-ce-white md:text-xl">Your Journey Starts Here</h2>
                    <p className='mt-5 text-base lg:text-base text-ce-blue md:text-ce-white md:text-xl'>Ready to embark on a transformative educational journey? Learn about our admission process, requirements, and explore the opportunities that Connect English offers. Connect with us to start your path to success today!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='items-center justify-center hidden px-10 lg:flex'>
              <img className='' src={whyChooseUs} alt="" />
            </div>
            <div className='flex items-center w-full col-span-3 lg:col-span-1'>
              <div className='w-full'>
                <div className="w-full h-auto p-2 transition duration-700 ease-in-out border shadow-xl md:h-80 hover:scale-110 border-ce-gray card card-compact bg-ce-pink">
                  <figure>
                    <IoGlobeOutline className='text-5xl text-ce-white' />
                  </figure>
                  <div className="card-body">
                    <h2 className="text-center text-ce-white md:text-xl">Study Abroad</h2>
                    <p className='mt-5 lg:text-base text-ce-white md:text-xl'>As a Connect English student, you have the chance to gain international study and work experience through our partnerships with esteemed higher education colleges. Gain international experiences that will shape your future and propel you towards excellence in your chosen career.
                    </p>
                  </div>
                </div>

                <div className="w-full h-auto p-2 mt-5 transition duration-700 ease-in-out border shadow-xl md:mt-5 md:h-80 card card-compact border-ce-gray hover:scale-110 bg-ce-white">
                  <figure>
                    <MdOutlineVideoCameraFront className='text-5xl text-ce-blue' />
                  </figure>
                  <div className="card-body">
                    <h2 className="text-center text-ce-blue md:text-xl">Varied Resources</h2>
                    <p className='mt-5 text-ce-gray md:text-xl lg:text-base'>Access a plethora of resources, including videos, quizzes, and interactive exercises. Supplement your learning with diverse materials that cater to different learning styles.</p>
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