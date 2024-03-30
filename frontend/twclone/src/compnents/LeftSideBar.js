import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { MdOutlineBookmarks } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { Link } from 'react-router-dom';

function LeftSideBar() {
  return (
    <div className='w-[20%]'>
        <div>
            <div>
                <img className='ml-4 w-20' src='https://img.freepik.com/premium-vector/twitter-global-social-media-networking-service-new-logo-twitter_944081-108.jpg?w=740' alt='twitter-logo'/>
            </div>

                <Link to="/" className='flex items-center my-2 py-2 px-4 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                    <div>
                        <FaHome size={"24px"}/>
                    </div>
                    <h1 className='font-bold text-lg ml-2'>Home</h1>
                </Link>

                <div className='flex items-center my-2 py-2 px-4 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                    <div>
                        <FaHashtag size={"24px"}/>
                    </div>
                    <h1 className='font-bold text-lg ml-2'>Explore</h1>
                </div>

                <div className='flex items-center my-2 py-2 px-4 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                    <div>
                        <IoIosNotifications size={"24px"}/>
                    </div>
                    <h1 className='font-bold text-lg ml-2'>Notifications</h1>
                </div>

                <Link to="/profile" className='flex items-center my-2 py-2 px-4 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                    <div>
                        <FaUser size={"24px"}/>
                    </div>
                    <h1 className='font-bold text-lg ml-2'>Profile</h1>
                </Link>
      

                <div className='flex items-center my-2 py-2 px-4 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                    <div>
                        <MdOutlineBookmarks size={"24px"}/>
                    </div>
                    <h1 className='font-bold text-lg ml-2'>Bookmarks</h1>
                </div>
        
                <div className='flex items-center my-2 py-2 px-4 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                    <div>
                        <IoMdLogOut size={"24px"}/>
                    </div>
                    <h1 className='font-bold text-lg ml-2'>Logout</h1>
                </div>
            </div>

            <button className='px-4 py-2 border-none text-md bg-[#1D98F0] w-full rounded-full text-white font-bold'>Post</button>
        </div>
  )
}

export default LeftSideBar