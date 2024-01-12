import { FC } from 'react'
import sydnyBg from '../../assets/bg/Sydney.jpg'

type Props = object

const CountrySection: FC<Props> = () => {
    return (
        <div className='w-full h-[230px] '>
            <div className='relative w-full h-full mt-10 overflow-hidden'>
                <div className='absolute top-0 left-0 z-[1] w-full h-full bg-ce-pink opacity-80'></div>
                <img className='object-cover w-full' src={sydnyBg} alt="" />
                <div className='absolute top-0 left-0 z-[2] w-full h-full p-5 mb-5'>
                    <div className='flex items-center justify-center w-full h-full'>
                        <div>
                            <h1 className='text-4xl font-bold text-center text-ce-white'>Get Started Today!</h1>
                            <p className='text-center text-ce-white md:text-2xl lg:text-base'>Ready to embark on your English language journey? Enroll now and unlock the doors to improved communication, career opportunities, and cultural connections.

                                Join our online English class community and let's make language learning an exciting and enriching adventure together!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountrySection