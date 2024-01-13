import  { FC } from 'react'
import {  FaFacebook } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
// import { FaPhoneVolume } from "react-icons/fa";

type Props = object;

const SocialMedia: FC<Props> = () => {
  return (
    <div className='w-full'>
        <div className='flex items-center pt-5'>
            <div className='flex gap-3 text-xl text-ce-blue'>
                <a className='cursor-pointer' href="#">
                    <FaFacebook />
                </a>
                <a href=" https://www.instagram.com/con_nectenglish ">
                    <LuInstagram />
                </a>
                <a href="#">
                    <FaXTwitter />
                </a>
            </div>
            {/* <div className='flex items-center ml-5 text-ce-pink'>
                <FaPhoneVolume className='text-3xl' />
                <div className='ml-2 text-ce-blue'>
                    <p>For more information call us</p>
                    <p className='text-xl font-bold'>+94 742 742 537</p>
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default SocialMedia