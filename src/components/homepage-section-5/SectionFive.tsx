import React, { FC } from 'react'
import bookImage from '../../assets/icons/book.png'


type Props = object

const SectionFive:FC<Props> = () => {
  return (
    <div className='w-full mt-10 bg-ce-blue'>
        <div className='relative items-center justify-between w-full h-full px-5 md:flex lg:px-32'>
            <div className='flex justify-center w-full h-full p-5 md:w-auto md:relative'>
                <img className='w-60' src={ bookImage } alt="" />
            </div>
            <div className='flex items-center h-full p-5 md:0'>
                <div>
                    <h1 className='text-4xl font-bold text-center md:text-right text-ce-white'>Why Connect English?</h1>
                    <p className='text-center md:text-right text-ce-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionFive