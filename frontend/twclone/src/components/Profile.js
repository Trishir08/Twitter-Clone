import React from 'react'
import Avatar from 'react-avatar';
import { IoMdArrowBack } from "react-icons/io";
import { Link, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux'
import useGetProfile from '../hooks/useGetProfile';

function Profile() {
    
    const {profile } = useSelector(store => store.user);
    const {id} = useParams() ;
    useGetProfile(id);

  return (
    <div className='w-[50%] border-r border-l border-gray-200'> 
        <div>
            <div className='flex items-center py-2'>
                <Link to = "/" className='p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer'>
                <IoMdArrowBack size={"24px"}/>
                </Link>
                <div className='ml-2'>
                <h1 className='font-bold text-lg'>{profile?.name}</h1>
                <p className='text-gray-500 text-sm'>10 post</p>
                </div>
            </div>
            <img className='h-52' src='https://pbs.twimg.com/profile_banners/14573900/1711268070/1500x500' alt='profile pic' />
            <div className='absolute top-52 ml-2 border-4 border-white rounded-full'>
            <Avatar src="https://pbs.twimg.com/profile_images/1756270450861019136/PQNlnQAv_400x400.png" size="120" round={true} />
            </div>
            <div className='text-right m-4'>
                <button className='px-4 py-1 rounded-full border border-gray-400 hover: bg-gray-200 font-bold'>Edit Profile</button>
            </div>
            <div className='m-4'>
                <h1 className='font-bold text-xl'>{profile?.name}</h1>
                <p>{`@${profile?.username}`}</p>
            </div>
            <div className='m-4 text-sm'> 
                <p>CHAMPIONS OF THE WORLD! 🏆🌍</p>
                <p>Complete #ManCity coverage: News, transfers, match commentary • 
               @The_FCAs Winner 2021, 2022, 2023 & @NWFAwards2023 Winner • </p>
            </div>
        </div>
    </div>
  )
}

export default Profile