import React from 'react'
import { CiSearch } from "react-icons/ci";
import Avatar from 'react-avatar';
function RightSideBar() {
  return (
    <div className='w-[25%]'>
        <div className=' flex items-center p-2 bg-gray-100 rounded-full outline-none w-full'>
            <CiSearch size="20px"/>
            <input className=' bg-transparent px-2 outline-none' type='text' placeholder='Search'/>
        </div>
            <div className='p-4 bg-gray-100 rounded-2xl my-4'>
                <h1 className='font-bold text-lg'>Who to Follow</h1> 
                <div className='flex item-center justify-between my-3'>
                    <div className='flex'> 
                    <div>
                    <Avatar src="https://pbs.twimg.com/profile_images/1756270450861019136/PQNlnQAv_400x400.png" size="40" round={true} />
                    </div>
                    <div className='ml-2'>
                        <h1 className='font-bold'>Trishir</h1>
                        <p className='text-sm'>@Trishir-08</p>
                    </div>
                    <div>
                    <button className='px-4 py-1 bg-black text-white rounded-full ml-3'>Profile</button>
                    </div>
                    </div>
                </div>

                <div className='flex item-center justify-between my-3'>
                    <div className='flex'> 
                    <div>
                    <Avatar src="https://pbs.twimg.com/profile_images/1756270450861019136/PQNlnQAv_400x400.png" size="40" round={true} />
                    </div>
                    <div className='ml-2'>
                        <h1 className='font-bold'>Trishir</h1>
                        <p className='text-sm'>@Trishir-08</p>
                    </div>
                    <div>
                    <button className='px-4 py-1 bg-black text-white rounded-full ml-3'>Profile</button>
                    </div>
                    </div>
                </div>

                <div className='flex item-center justify-between my-3'>
                    <div className='flex'> 
                    <div>
                    <Avatar src="https://pbs.twimg.com/profile_images/1756270450861019136/PQNlnQAv_400x400.png" size="40" round={true} />
                    </div>
                    <div className='ml-2'>
                        <h1 className='font-bold'>Trishir</h1>
                        <p className='text-sm'>@Trishir-08</p>
                    </div>
                    <div>
                    <button className='px-4 py-1 bg-black text-white rounded-full ml-3'>Profile</button>
                    </div>
                    </div>
                </div>

            </div>
        </div>
  )
}

export default RightSideBar