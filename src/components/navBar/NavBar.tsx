import { FC, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from "framer-motion"

import ceIcon from "../../assets/icons/connect-english.png"
// import CoursesMenu from './CoursesMenu'
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import CoursesMenu from './CoursesMenu';
import AdditionalServicesMenu from './AdditionalServicesMenu';
import { FaPhoneVolume } from "react-icons/fa";

type Props = object

const NavBar: FC<Props> = () => {
    const [mobileMenu, setMobileMenu] = useState(false)

    const [hovering, setHovering] = useState<number | null>(null)

    // const [popoverHeight, setPopoverHeight] = useState<number | null>(null)
    const [courceMenu, setCoseMune] = useState(false)
    const [additionalServiceMenu, setAdditionalServiceMenu] = useState(false)
    const [fade, setFade] = useState(false);

    useEffect(() => {console.log(mobileMenu)},[mobileMenu])


    return (
        <nav className=" w-full bg-ce-blue h-[100px] fixed  z-10">
            <div className='w-full bg-ce-pink'>
                <div className='flex items-center justify-end w-full h-full px-2 md:px-5 lg:px-32'>
                    <div className='flex items-center'>
                        <FaPhoneVolume className='text-xl text-ce-white' />
                        <p className='text-lg font-bold text-ce-white'>+94 742 742 537</p>
                    </div> 
                </div>
            </div>
            <div className='flex h-[65px] items-center justify-between w-full px-2 md:px-5 lg:px-32'>
                <div className="h-full ">
                    <Link to="/">
                        <div className='flex items-center h-full'>
                            <img className='w-[60px]' src={ceIcon} alt="" />
                            <span className='text-xl font-bold text-ce-white'>CONNECT </span>
                            <span className='ml-1 text-xl font-bold text-ce-pink'>ENGLISH </span>
                        </div>
                    </Link>
                </div>
                <div className="items-center hidden h-full space-x-4 text-ce-white lg:flex" >
                    <NavLink 
                        className='aria-[current=page]:border-b-2 border-ce-pink px-2 py-2 rounded-full transition duration-150 ease-in-out hover:text-ce-pink' 
                         to="/">Home</NavLink>
                    <NavLink className='aria-[current=page]:border-b-2 border-ce-pink px-2 py-2 rounded-full  transition duration-150 ease-in-out hover:text-ce-pink' onMouseEnter={() => { setHovering(2) }} to="/about">About Us</NavLink>
                    <NavLink className='px-2 py-2 transition duration-150 ease-in-out rounded-full hover:text-ce-pink' onClick={() => setHovering(hovering === 3 ? null : 3)}  onMouseEnter={() => { setHovering(3)}} to="#">Courses</NavLink>
                    <NavLink className='aria-[current=page]:border-b-2 border-ce-pink px-2 py-2 rounded-full  transition duration-150 ease-in-out hover:text-ce-pink' onMouseEnter={() => { setHovering(4)  }} to="/Student-Referral-Scheme">Student Referral Scheme </NavLink>
                    <NavLink className='px-2 py-2 transition duration-150 ease-in-out rounded-full hover:text-ce-pink' onClick={() => setHovering(hovering === 5 ? null : 5)}  onMouseEnter={() => { setHovering(5)}} to="#">Additional Services</NavLink>
                    <NavLink className='aria-[current=page]:border-b-2 border-ce-pink px-2 py-2 rounded-full  transition duration-150 ease-in-out hover:text-ce-pink' onMouseEnter={() => { setHovering(6) }} to="/contact-us">Contact Us</NavLink>
                    
                    
                    {hovering && hovering == 3 && (
                            <div
                                className='absolute right-0 w-full overflow-hidden rounded shadow top-24 transform-gpu'>
                                 <motion.div
                                    initial={{ y: -100 }}
                                    animate={{ y: 0 }}
                                    transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20
                                }}>

                                    <CoursesMenu /> 
                                </motion.div>
                            </div>
                        )
                    }
                    {hovering && hovering == 5 && (
                        <div
                            
                            className='absolute right-0 w-full overflow-hidden rounded shadow top-24 transform-gpu'>
                            <motion.div
                                    initial={{ y: -100 }}
                                    animate={{ y: 0 }}
                                    transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20
                                }}>
                                    <AdditionalServicesMenu /> 
                            </motion.div>
                        </div>
                        )
                    }
                </div>
                    
                {
                    mobileMenu ? (
                        <div className='flex items-center text-4xl text-ce-pink lg:hidden h-fill'>
                             <motion.div
                                initial={{ scale: 0 }}
                                animate={{ rotate: 180, scale: 1 }}
                                transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20
                            }}>
                                    <button onClick={() => { setMobileMenu(!mobileMenu), setFade(!fade) }}><IoCloseSharp /></button>
                                </motion.div>
                        </div>
                    
                    ): (
                        <div className='flex items-center text-4xl text-ce-pink lg:hidden h-fill'>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{  scale: 1 }}
                                transition={{
                               
                                stiffness: 260,
                                damping: 20
                            }}>
                                <button onClick={() => { setMobileMenu(!mobileMenu), setFade(!fade) }}><TiThMenu /></button>
                            </motion.div>
                        </div>
                    )
                }


                {/* Mobile Menu */}

            </div>
            {
                mobileMenu && (
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 40
                }}>
                    <div className={`absolute top-0 w-full h-screen bg-ce-pink mt-[100px]  p-5 overflow-hidden overflow-y-scroll`}>
                        <div className='w-full mt-2'>
                            <p className='text-3xl text-center text-ce-white'>Welcome to Connect English</p>
                        </div>
                        <div className='w-full mt-5'>
                            <ul className="p-2 divide-y rounded-t-none bg-ce-pink text-ce-white">
                                <li  className='p-5 cursor-pointer '><Link  onClick={() => setMobileMenu(false)}  className='w-full h-full' to='/'><p>Home</p></Link></li>
                                <li onClick={() => setMobileMenu(!mobileMenu)} className='p-5 cursor-pointer '><Link to='/about'><p>About Us</p></Link></li>
                                <li  className='p-5 cursor-pointer'>
                                    <div onClick={() => {setCoseMune(!courceMenu), setAdditionalServiceMenu(false)}} className='flex items-center justify-between w-full'>
                                        <a>Courses </a>
                                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                        </svg>
                                    </div>
                                    {
                                        courceMenu&& (
                                            <div   
                                                className='left-0 w-full mt-3 mb-5 space-y-2 y-5'>
                                               <div className='p-2 rounded-lg bg-ce-white text-ce-blue'>
                                                    <h1 className='mt-5 text-xl font-bold underline'>General English Beginner to Advance</h1>
                                                   <div className='flex flex-col-reverse mt-5 space-y-2 divide-y divide-y-reverse'>
                                                        <Link className='py-2' onClick={() => setMobileMenu(!mobileMenu)} to='#'>Reading and Writing</Link>
                                                        <Link className='py-2' onClick={() => setMobileMenu(!mobileMenu)} to='#'>Provided by Connect English guest Lecture</Link>
                                                        <Link className='py-2' onClick={() => setMobileMenu(!mobileMenu)} to='#'>Contact us for more information</Link>
                                                   </div>
                                               </div>
                                               <div className='p-2 rounded-lg bg-ce-white text-ce-blue'>
                                                    <h1 className='mt-5 text-xl font-bold underline'>Business English Beginner to Advance</h1>
                                                   <div className='flex flex-col-reverse mt-5 space-y-2 divide-y divide-y-reverse'>
                                                        <Link className='py-2' onClick={() => setMobileMenu(!mobileMenu)} to='#'>Customer service, telesales, relationship management, project</Link>
                                                        <Link className='py-2' onClick={() => setMobileMenu(!mobileMenu)} to='#'>management and management preparation.</Link>
                                                        <Link className='py-2' onClick={() => setMobileMenu(!mobileMenu)} to='#'>Provided by Connect English guest lecture</Link>
                                                        <Link className='py-2' onClick={() => setMobileMenu(!mobileMenu)} to='#'>Contact us for more information</Link>
                                                   </div>
                                               </div>
                                               <div className='p-2 rounded-lg bg-ce-white text-ce-blue'>
                                                    <h1 className='mt-5 text-xl font-bold underline'>Individual tailer made course</h1>
                                                   <div className='flex flex-col-reverse mt-5 space-y-2 divide-y divide-y-reverse'>
                                                        <Link className='py-2' onClick={() => setMobileMenu(!mobileMenu)} to='#'>Allows you to decide what you wish to improve on</Link>
                                                        <Link className='py-2' onClick={() => setMobileMenu(!mobileMenu)} to='#'>Provided by Connect English guest Lecture</Link>
                                                        <Link className='py-2' onClick={() => setMobileMenu(!mobileMenu)} to='#'>Info Coming soon...</Link>
                                                   </div>
                                               </div>
                                               <div className='p-2 rounded-lg bg-ce-white text-ce-blue'>
                                                    <h1 className='mt-5 text-xl font-bold underline'>Conversational English Beginner to Advance</h1>
                                                   <div className='flex flex-col-reverse mt-5 space-y-2 divide-y divide-y-reverse'>
                                                        <Link className='py-2' onClick={() => setMobileMenu(!mobileMenu)} to='#'>Coming soon...</Link>
                                                   </div>
                                               </div>
                                               <div className='p-2 rounded-lg bg-ce-white text-ce-blue'>
                                                    <h1 className='mt-5 text-xl font-bold underline'>Robotics</h1>
                                                   <div className='flex flex-col-reverse mt-5 space-y-2 divide-y divide-y-reverse'>
                                                        <Link className='py-2' onClick={() => setMobileMenu(!mobileMenu)} to='#'>Coming soon...</Link>
                                                   </div>
                                               </div>
                                               <div className='p-2 rounded-lg bg-ce-white text-ce-blue'>
                                                    <h1 className='mt-5 text-xl font-bold underline'>Engineering</h1>
                                                   <div className='flex flex-col-reverse mt-5 space-y-2 divide-y divide-y-reverse'>
                                                        <Link className='py-2' onClick={() => setMobileMenu(!mobileMenu)} to='#'>Coming soon...</Link>
                                                   </div>
                                               </div>
                                               <div className='p-2 rounded-lg bg-ce-white text-ce-blue'>
                                                    <h1 className='mt-5 text-xl font-bold underline'>Accounting</h1>
                                                   <div className='flex flex-col-reverse mt-5 space-y-2 divide-y divide-y-reverse'>
                                                        <Link className='py-2' onClick={() => setMobileMenu(!mobileMenu)} to='#'>Coming soon...</Link>
                                                   </div>
                                               </div>
                                               <div className='p-2 rounded-lg bg-ce-white text-ce-blue'>
                                                    <h1 className='mt-5 text-xl font-bold underline'>Advanced Mathematics</h1>
                                                   <div className='flex flex-col-reverse mt-5 space-y-2 divide-y divide-y-reverse'>
                                                        <Link className='py-2' onClick={() => setMobileMenu(!mobileMenu)} to='#'>Coming soon...</Link>
                                                   </div>
                                               </div>
                                            </div>
                                        )
                                    }
                                </li>
                                <li onClick={() => setMobileMenu(false)} className='p-5 cursor-pointer '><Link to="Student-Referral-Scheme"><p> Student Referral Scheme</p></Link></li>
                                <li className='p-5 cursor-pointer '>
                                    <div onClick={() => {setCoseMune(false), setAdditionalServiceMenu(!additionalServiceMenu)}} className='flex items-center justify-between w-full'>
                                        <Link to="#"><p> Additional Services </p></Link>
                                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                        </svg>
                                    </div>
                                    {
                                        additionalServiceMenu && (
                                            <div className='left-0 w-full mt-3 mb-5 space-y-2 y-5'>
                                                <div className='p-2 rounded-lg bg-ce-white text-ce-blue'>
                                                    <h1 className='mt-5 text-xl font-bold underline'>International Life Coaching</h1>
                                                   <div className='flex flex-col-reverse mt-5 space-y-2 divide-y divide-y-reverse'>
                                                        <Link className='py-2' onClick={() => setMobileMenu(!mobileMenu)} to='#'>Coming soon...</Link>
                                                   </div>
                                               </div>

                                                <div className='p-2 rounded-lg bg-ce-white text-ce-blue'>
                                                    <h1 className='mt-5 text-xl font-bold underline'>Contact Center Consulting</h1>
                                                   <div className='flex flex-col-reverse mt-5 space-y-2 divide-y divide-y-reverse'>
                                                        <Link className='py-2' onClick={() => setMobileMenu(!mobileMenu)} to='#'>Coming soon...</Link>
                                                   </div>
                                               </div>

                                                <div className='p-2 rounded-lg bg-ce-white text-ce-blue'>
                                                    <h1 className='mt-5 text-xl font-bold underline'>Contact Center Consulting</h1>
                                                   <div className='flex flex-col-reverse mt-5 space-y-2 divide-y divide-y-reverse'>
                                                        <Link className='py-2' onClick={() => setMobileMenu(!mobileMenu)} to='#'>Coming soon...</Link>
                                                   </div>
                                               </div>

                                                <div className='p-2 rounded-lg bg-ce-white text-ce-blue'>
                                                    <h1 className='mt-5 text-xl font-bold underline'>Business Analytics</h1>
                                                   <div className='flex flex-col-reverse mt-5 space-y-2 divide-y divide-y-reverse'>
                                                        <Link className='py-2' onClick={() => setMobileMenu(!mobileMenu)} to='#'>Coming soon...</Link>
                                                   </div>
                                               </div>

                                                <div className='p-2 rounded-lg bg-ce-white text-ce-blue'>
                                                    <h1 className='mt-5 text-xl font-bold underline'>Website Development</h1>
                                                   <div className='flex flex-col-reverse mt-5 space-y-2 divide-y divide-y-reverse'>
                                                        <Link className='py-2' onClick={() => setMobileMenu(!mobileMenu)} to='#'>Coming soon...</Link>
                                                   </div>
                                               </div>

                                                <div className='p-2 rounded-lg bg-ce-white text-ce-blue'>
                                                    <h1 className='mt-5 text-xl font-bold underline'>IT Support</h1>
                                                   <div className='flex flex-col-reverse mt-5 space-y-2 divide-y divide-y-reverse'>
                                                        <Link className='py-2' onClick={() => setMobileMenu(!mobileMenu)} to='#'>Coming soon...</Link>
                                                   </div>
                                               </div>
                                            </div>
                                        )
                                    }
                                </li>
                                <li onClick={() => setMobileMenu(false)} className='p-5 cursor-pointer '><Link to="contact-us"><p>Contact Us</p></Link></li>
                            </ul>

                            <div className='w-full mt-10'>
                                <p className='text-base text-center text-ce-white'>Copyright © connect english 2024</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
                )
            }
        </nav >
    )
}

export default NavBar