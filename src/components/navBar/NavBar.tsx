import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import ceIcon from "../../assets/icons/connect-english.png"
import CoursesMenu from './CoursesMenu'
import { TiThMenu } from "react-icons/ti";
import { RiLoginCircleFill } from "react-icons/ri";

type Props = object

const NavBar: FC<Props> = () => {
    const [mobileMenu, setMobileMenu] = useState(false)

    const [hovering, setHovering] = useState<number | null>(null)
    const [popoverLeft, setPopoverLeft] = useState<number | null>(null)
    // const [popoverHeight, setPopoverHeight] = useState<number | null>(null)
    const [courceMenu, setCoseMune] = useState(false)
    const [fade, setFade] = useState(false);

    useEffect(() => {console.log(mobileMenu)},[mobileMenu])

    return (
        <nav className=" w-full bg-ce-blue h-[65px] fixed  z-10">
            <div className='flex items-center justify-between w-full h-full px-2 md:px-5 lg:px-32'>
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
                    <Link onMouseEnter={(e) => { setHovering(0); setPopoverLeft(e.currentTarget.offsetLeft) }} to="/">HOME</Link>
                    <Link onMouseEnter={(e) => { setHovering(1); setPopoverLeft(e.currentTarget.offsetLeft) }} to="/about">ABOUT US</Link>
                    <Link onMouseEnter={(e) => { setHovering(2); setPopoverLeft(e.currentTarget.offsetLeft) }} to="/courses">COURSES</Link>
                    <Link onMouseEnter={(e) => { setHovering(3); setPopoverLeft(e.currentTarget.offsetLeft) }} to="/contact">CONTACT US</Link>
                    {hovering && hovering == 2 && (
                        <div
                            style={{
                                left: popoverLeft || 0,
                            }}
                            className='absolute p-5 pt-6 overflow-hidden transition-all duration-300 rounded shadow top-12 bg-ce-pink transform-gpu'>
                            <CoursesMenu />
                        </div>
                    )

                    }
                </div>
                <div className='text-4xl text-ce-pink lg:hidden'>
                    <button onClick={() => { setMobileMenu(!mobileMenu), setFade(!fade) }}><TiThMenu /></button>
                </div>

                {/* Mobile Menu */}

            </div>
            {
                mobileMenu && (
                    <div className={`absolute top-0 w-full h-screen bg-ce-pink mt-[65px] transition-all duration-200 ${fade ? 'opacity-95' : 'opacity-0'} p-10`}>
                        <div className='w-full mt-5'>
                            <div>

                            </div>
                            <p className='text-3xl text-center text-ce-white'>Welcome to Connect English</p>
                        </div>
                        <div className='w-full mt-10'>
                            <ul className="p-2 divide-y rounded-t-none bg-ce-pink text-ce-white">
                                <li  className='p-5 cursor-pointer '><Link to='/'>Home</Link></li>
                                <li onClick={() => setMobileMenu(false)} className='p-5 cursor-pointer '><Link to='/about'>About Us</Link></li>
                                <li onClick={() => setCoseMune(!mobileMenu)} className='p-5 cursor-pointer'>
                                    <div className='flex items-center justify-between w-full'>

                                        <a>Courses </a>
                                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                        </svg>
                                    </div>
                                    {
                                        courceMenu&& (
                                            <div  
                                                onClick={() => setCoseMune(!courceMenu)} 
                                                className='absolute left-0 w-full h-screen p-5 mb-5 top-10'>
                                                <ul className='p-5 divide-y rounded text-ce-blue divide-slate-200 bg-ce-white'>
                                                    <li className='py-2 cursor-pointer'>
                                                        course 01
                                                    </li>
                                                    <li className='py-2 cursor-pointer'>
                                                        course 02
                                                    </li>
                                                    <li className='py-2 cursor-pointer'>
                                                        course 03
                                                    </li>
                                                    <li className='py-2 cursor-pointer'>
                                                        course 04
                                                    </li>
                                                    <li className='py-2 cursor-pointer'>
                                                        course 05
                                                    </li>
                                                    <li className='py-2 cursor-pointer'>
                                                        course 06
                                                    </li>
                                                    <li className='py-2 cursor-pointer'>
                                                        course 07
                                                    </li>
                                                    <li className='py-2 cursor-pointer'>
                                                        course 08
                                                    </li>
                                                </ul>
                                            </div>
                                        )
                                    }
                                </li>
                                <li onClick={() => setMobileMenu(false)} className='p-5 cursor-pointer '><a>Contact Us</a></li>
                                <li onClick={() => setMobileMenu(false)} className='p-5 cursor-pointer flex items-center'><div className='text-3xl'><RiLoginCircleFill /></div><a className='ml-2'>Log In</a></li>
                                <li onClick={() => setMobileMenu(false)} className='p-5 cursor-pointer bg-ce-blue rounded-lg'><a>Register</a></li>
                            </ul>
                        </div>
                        <div className='w-full mt-10'>
                            <p className='text-base text-center text-ce-white'>Copyright © connect english 2024</p>
                        </div>
                    </div>
                )
            }
        </nav >
    )
}

export default NavBar