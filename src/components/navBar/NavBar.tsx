import React, { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import ceIcon from "../../assets/icons/connect-english.png"
import CoursesMenu from './CoursesMenu'

type Props = {}

const NavBar: FC<Props> = () => {
    const [hovering, setHovering] = useState<number | null>(null)
    const [popoverLeft, setPopoverLeft] = useState<number | null>(null)
    const [popoverHeight, setPopoverHeight] = useState<number | null>(null)


    return (
        <nav className=" w-full bg-ce-blue h-[65px] fixed  z-10">
            <div className='w-full flex items-center h-full justify-between px-32'>
                <div className=" h-full">
                    <Link to="/">
                        <div className='flex items-center h-full'>
                            <img className='w-[60px]' src={ceIcon} alt="" />
                            <span className='text-ce-white font-bold text-xl'>CONNECT </span>
                            <span className='text-ce-pink font-bold text-xl ml-1'>ENGLISH </span>
                        </div>
                    </Link>
                </div>
                <div className="flex h-full items-center text-ce-white space-x-4" >
                    <Link onMouseEnter={(e) => {setHovering(0); setPopoverLeft(e.currentTarget.offsetLeft)}} to="/">HOME</Link>
                    <Link onMouseEnter={(e) => {setHovering(1); setPopoverLeft(e.currentTarget.offsetLeft)}}  to="/about">ABOUT US</Link>
                    <Link onMouseEnter={(e) => {setHovering(2); setPopoverLeft(e.currentTarget.offsetLeft)}}  to="/courses">COURSES</Link>
                    <Link onMouseEnter={(e) => {setHovering(3); setPopoverLeft(e.currentTarget.offsetLeft)}}  to="/contact">CONTACT US</Link>
                {hovering && hovering == 2 && (
                     <div 
                     style={{
                         left: popoverLeft || 0,
                     }}
                     className='absolute top-12 pt-6 p-5 bg-ce-pink overflow-hidden  transform-gpu rounded shadow transition-all duration-300'>
                     <CoursesMenu />
                 </div>
                )
                    
                }
            </div>

        </div>
        </nav >
    )
}

export default NavBar