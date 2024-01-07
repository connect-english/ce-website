import React, { FC, useState } from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

type Props = object

const ContactUs: FC<Props> = () => {

    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    return (
        <div className='w-full mb-10'>
            <div className='relative items-center justify-between w-full h-full px-5 md:flex lg:px-32 '>
                <div className='grid w-full grid-cols-2 gap-4'>
                    <div className='w-full col-span-2 md:col-span-1'>
                        <h1 className='text-4xl text-ce-pink'>Get in touch</h1>
                        <p className='text-ce-white'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum</p>
                        <div className='flex mt-5'>
                            <div className='text-3xl text-ce-pink'>
                                <MdEmail />
                            </div>
                            <p className='ml-2 text-ce-white'>info@conectenglish.me</p>
                        </div>
                        <div className='flex mt-5'>
                            <div className='text-3xl text-ce-pink'>
                                <FaPhone />
                            </div>
                            <p className='ml-2 text-ce-white'>+44 333 444 565</p>
                        </div>
                        <div className='flex mt-5'>
                            <div className='text-3xl text-ce-pink'>
                                <FaLocationDot />
                            </div>
                            <p className='ml-2 text-ce-white'>13-15 St Georges St, Norwich </p>
                        </div>
                    </div>
                    <div className='w-full col-span-2 md:col-span-1'>
                        <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-ce-pink">Say something</h5>
                            </a>
                            <form action="" className='w-full text-ce-blue'>
                                <label className="w-full form-control">
                                    <div className="label">
                                        <span className="label-text text-ce-blue">What is your name?</span>
                                    </div>
                                    <input onChange={(e) => setUserName(e.target.value)}  value={ userName } type="text" placeholder="Jhon" className="w-full input input-bordered" />
                                </label>
                                <label className="w-full form-control">
                                    <div className="label">
                                        <span className="label-text text-ce-blue">Your email?</span>
                                    </div>
                                    <input onChange={(e) => setEmail(e.target.value)}  type="email" value={ email } placeholder="jhon@gmail.com" className="w-full input input-bordered" />
                                </label>

                                <label className="w-full form-control">
                                    <div className="label">
                                        <span className="label-text">Message</span>
                                    </div>
                                    <textarea value={ message } onChange={(e) => setMessage(e.target.value)} className="w-full h-24 textarea textarea-bordered" placeholder="Your message"></textarea>
                                </label>
                                <div className='flex justify-end mt-5'>
                                    <button className='px-10 py-3 rounded-lg text-ce-white bg-ce-pink'> Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs