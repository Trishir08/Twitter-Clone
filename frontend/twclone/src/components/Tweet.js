import React from 'react'
import Avatar from 'react-avatar'
import { FaRegComment } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";


function Tweet({tweet}) {
  return (
    <div className='border-b border-gray-200'>
        <div>
            <div className='flex p-4'>
               <Avatar src="https://pbs.twimg.com/profile_images/1756270450861019136/PQNlnQAv_400x400.png" size="40" round={true} />
             <div className='ml-2'>
                <div className='flex items-center'>
                <h1 className='font-bold'>Trishir</h1>
                <p className='text-gray-500 text-sm ml-1'>@trishir-08 . 2m</p>
                </div>
    
          <div>
            <p>Hey Developers let's connect and grow together</p>
          </div>
                     <div className='flex justify-between my-3'>
                        <div className='flex  items-center'>
                        <div className='p-2 hover:bg-green-200 rounded-full cursor-pointer'>
                        <FaRegComment  size="24px" />  
                        </div>
                        <p>0</p>
                        </div>
                        <div className='flex items-center'>
                        <div className='p-2 hover:bg-red-400 rounded-full cursor-pointer'>
                        <CiHeart size="24px" />   
                        </div>
                        <p>0</p>  
                        </div>
                        <div className='flex items-center'>
                        <div className='p-2 hover:bg-yellow-200 rounded-full cursor-pointer'> 
                        <CiBookmark size="24px" />
                        </div>
                         <p>0</p>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tweet