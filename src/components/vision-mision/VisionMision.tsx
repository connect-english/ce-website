import React, { FC } from 'react'

import visionIcon from '../../assets/icons/vision.png'
import misionIcon from '../../assets/icons/mision.png'

type Props = object

const VisionMision: FC<Props> = () => {
    return (
        <div className='w-full'>
            <div className='relative items-center justify-between w-full h-full px-5 md:flex lg:px-32'>
                <div className="grid w-full grid-cols-2 gap-4">
                    {/* Vision */}
                    <div className='items-center w-full col-span-2 p-5 border rounded-lg shadow md:col-span-1 bg-ce-white hover:bg-ce-light-gray'>
                        <div className='flex justify-center w-full border-gray-200'>
                            <img className='w-44' src={ visionIcon } alt="Vision" />
                        </div>
                        <div>
                            <h2 
                                className='mt-5 text-4xl font-bold text-center text-ce-blue'>
                                        Our Vision
                            </h2>
                            <p className='mt-5 text-ce-gray'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                    </div>
                    {/* Mision */}
                    <div className='items-center w-full col-span-2 p-5 border rounded-lg shadow md:col-span-1 bg-ce-white hover:bg-ce-light-gray'>
                        <div className='flex justify-center w-full border-gray-200'>
                            <img className='w-44' src={ misionIcon } alt="Vision" />
                        </div>
                        <div>
                            <h2 
                                className='mt-5 text-4xl font-bold text-center text-ce-blue'>
                                        Our Mission
                            </h2>
                            <p className='mt-5 text-ce-gray'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisionMision