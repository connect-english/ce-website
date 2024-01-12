import { FC } from 'react'

import rocketIcon from '../../assets/icons/rocket.png'
import payment from '../../assets/icons/payment.png'
import time from '../../assets/icons/time.png'
import attunement from '../../assets/icons/attunement.png'

type Props = object

const Speciality: FC<Props> = () => {
    return (
        <div className='w-full bg-ce-white'>
            <div className='flex items-center justify-between w-full h-full px-5 py-5 mt-20 lg:py-32 md:py-14 lg:px-32'>
                <div className="grid grid-cols-4 gap-4">
                    <div className='w-full col-span-4 md:col-span-1'>
                        <div className='flex justify-center w-full'>
                            <img className='w-[160px]' src={rocketIcon} alt="" />
                        </div>
                        <div className='mt-5'>
                            <p className='text-center text-ce-gray md:text-left '>
                                At Connect English, we understand that everyone has unique learning preferences and speeds. That's why our customized educational programs cater to individual styles, providing a wide range of subjects and engaging activities to ensure a personalized and enriching learning experience.
                            </p>
                        </div>
                    </div>

                    <div className='w-full col-span-4 md:col-span-1 md:mt-0'>
                        <div className='flex justify-center w-full md:hidden'>
                            <img className='w-[160px]' src={payment} alt="" />
                        </div>
                        <div className='mt-5 md:mb-5'>
                            <p className='text-center text-ce-gray md:text-left'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            </p>
                        </div>
                        <div className='justify-center hidden w-full md:flex'>
                            <img className='w-[160px]' src={payment} alt="" />
                        </div>
                    </div>

                    <div className='w-full col-span-4 md:col-span-1 md:mt-0'>
                        <div className='flex justify-center w-full'>
                            <img className='w-[160px]' src={time} alt="" />
                        </div>
                        <div className='mt-5'>
                            <p className='text-center text-ce-gray md:text-left'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            </p>
                        </div>
                    </div>

                    <div className='w-full col-span-4 mt-5 md:col-span-1 md:mt-0'>
                        <div className='flex justify-center w-full md:hidden'>
                            <img className='w-[160px]' src={attunement} alt="" />
                        </div>
                        <div className='mt-5 md:mb-5'>
                            <p className='text-center md:text-left text-ce-gray'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            </p>
                        </div>
                        <div className='justify-center hidden w-full md:flex'>
                            <img className='w-[160px]' src={attunement} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Speciality