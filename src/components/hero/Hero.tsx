import React, { FC } from 'react'
import { TypeAnimation } from 'react-type-animation';

import ceLogo from '../../assets/icons/connect-english-blue-pink-logo.png'
import globImage from '../../assets/bg/Group 162.png'
import SocialMedia from './SocialMedia'
type Props = object

const Hero: FC<Props> = () => {

    return (
        <div className='md:h-screen'>
            <div 
                className='absolute top-0 left-0 hidden w-full h-full md:block bg-ce-blue opacity-70'></div>
            <video 
                className='
                    w-full 
                    hidden 
                    md:block 
                    object-cover 
                    h-[100vh]' 
                    src='https://res.cloudinary.com/dzg8clhcy/video/upload/v1704562539/website/videdo_ondts3.mp4' autoPlay loop muted />
            <div 
                className='
                    md:w-[70%] 
                    w-full 
                    md:absolute 
                    relative 
                    left-0 top-0 
                    bg-ce-white 
                    h-full 
                    md:rounded-br-[80%] 
                    p-5
                    md:p-10 
                    lg:pl-32'
            >
                <div className='absolute w-full'>

                    <img 
                        className='
                             
                            md:w-[70%] 
                            mt-[150px] 
                            opacity-50' 
                            src={globImage} 
                            alt="" />
                </div>
                <div 
                    className='
                        w-full 
                        h-full 
                        items-center 
                        mt-[100px]
                        md:mt-40'>
                    <div 
                        className='flex justify-center w-full mt-10 md:20 md:justify-start mt'
                    >
                        <img className='w-[150px]' src={ceLogo} alt="" />
                    </div>
                    <div className='h-20 mt-10 text-3xl font-bold md:h-32 text-ce-blue md:text-5xl'>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed once, initially
                                'We teach English for beginners',
                                1000,
                                'We teach English for intermediate learners' ,
                                1000,
                                'We teach English for advanced students',
                                1000,
                                'We dive into English for academic success',
                                1000,
                            ]}
                            speed={50}
                            style={{  }}
                            repeat={Infinity}
                        />

                        {/* <p className='text-5xl font-bold text-ce-blue'>
                            What is Lorem Ipsum?
                        </p> */}
                    </div>
                    <div className='md:w-[70%] w-full mt-10 text-ce-blue font-semibold'>
                        <p >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since
                            the 1500s, when an unknown printer took a galley of type and scrambled
                            it to make a type specimen book. It has survived not only five centuries,
                            but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                    </div>
                    <div className='mt-10 lg:hidden'>
                        <SocialMedia />
                    </div>
                </div>
                {/* <div className='pt-5 md:w-[50%] w-full z-10'>
                    <FormHero />
                </div> */}
               
                

            </div>
        </div>
    )
}

export default Hero