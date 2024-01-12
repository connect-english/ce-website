import { FC } from 'react'

import ceLogo from '../../assets/icons/connect-english.png'
import { FaFacebook } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ContactUs from './ContactUs';

type Props = object


const Footer: FC<Props> = () => {
    return (
        <div className='w-full mt-10 '>
            <div className='w-full h-3 bg-ce-pink'></div>
            <div className='w-full py-10 bg-ce-blue'>
                <ContactUs />
                <div className='relative items-center justify-between w-full h-full px-5 md:flex lg:px-32 '>
                    <div className='grid w-full grid-cols-4 gap-4'>
                        <div className='w-full col-span-4 md:col-span-1'>
                            <div className='flex justify-center w-full md:justify-start'>
                                <img className='w-32' src={ceLogo} alt="connect english logo" />
                            </div>
                            <div className='w-full mt-10'>
                                <p className='text-ce-white'>Follow us on</p>
                                <div className='flex gap-5 text-xl text-ce-pink'>
                                    <a href="#">
                                        <FaFacebook />
                                    </a>
                                    <a href=" https://www.instagram.com/con_nectenglish ">
                                        <LuInstagram />
                                    </a>
                                    <a href="">
                                        <FaLinkedinIn />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className='w-full col-span-4 text-white md:col-span-1'>
                            <p className='mb-5 font-bold text-ls'>Menu</p>
                            <ul>
                                <li>
                                    <Link className='transition duration-150 ease-in-out hover:text-ce-pink' to="/">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <a className='transition duration-150 ease-in-out hover:text-ce-pink' href="#">About Us</a>
                                </li>
                                <li>
                                    <a className='transition duration-150 ease-in-out hover:text-ce-pink' href="#">Courses</a>
                                </li>
                                <li>
                                    <a className='transition duration-150 ease-in-out hover:text-ce-pink' href="#">Contact Us</a>
                                </li>
                            </ul>
                        </div>

                        <div className='w-full col-span-4 text-white md:col-span-1'>
                            {/* <p className='mb-5 font-bold text-ls'>Help & Support</p>
                            <ul>
                                <li>
                                    <a className='transition duration-150 ease-in-out hover:text-ce-pink' href="#">FAQs</a>
                                </li>
                                <li>
                                    <a className='transition duration-150 ease-in-out hover:text-ce-pink' href="#">Terms and Conditions</a>
                                </li>
                                <li>
                                    <a className='transition duration-150 ease-in-out hover:text-ce-pink' href="#">Privacy polic</a>
                                </li>
                            </ul> */}
                        </div>

                        <div className='w-full col-span-4 text-white md:col-span-1'>
                            {/* <p className='mb-5 font-bold text-ls'>Courses</p>
                            <ul>
                                <li>
                                    <a className='transition duration-150 ease-in-out hover:text-ce-pink' href="#">FAQs</a>
                                </li>
                                <li>
                                    <a className='transition duration-150 ease-in-out hover:text-ce-pink' href="#">Terms and Conditions</a>
                                </li>
                                <li>
                                    <a className='transition duration-150 ease-in-out hover:text-ce-pink' href="#">Privacy polic</a>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                </div>
                <div className='flex justify-between w-full mt-5 divide-y divide-dashed'>
                    <p className='w-full text-center text-ce-gray'>Copyright © connect english 2024 <a className='w-56 text-right no-underline text-ce-white' href="https://www.iboxlab.com" target="_blank" rel="noopener">- iBoxLAB Website</a></p>
                    
                </div>
            </div>

        </div>
    )
}

export default Footer