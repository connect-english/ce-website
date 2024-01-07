import  { FC } from 'react'
import {  FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa";

type Props = object;

const SocialMedia: FC<Props> = () => {
  return (
    <div className='w-full'>
        <div className='pt-5 flex items-center'>
            <div className='flex gap-3 text-xl text-ce-blue'>
                <FaFacebook />
                <FaYoutube />
                <FaTwitter />
            </div>
            <div className='flex ml-5 text-ce-pink items-center'>
                <FaPhoneVolume className='text-3xl' />
                <div className='text-ce-blue ml-2'>
                    <p>For more information call us</p>
                    <p className='text-xl font-bold'>+44 222 222 222</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SocialMedia