import React, { useEffect, useState } from 'react'
import '../sidebar/sidebar.css'
import SidebarButton from './sidebarButton'
import {MdLocalLibrary, MdSpaceDashboard} from 'react-icons/md'
import {FaGripfire, FaSignOutAlt} from 'react-icons/fa'
import {FaPlayCircle} from 'react-icons/fa'
import {MdFavorite} from 'react-icons/md'
import apiClient from '../../spotify'



export default function Sidebar() {

  const[image,setImage]=useState(
    'https://picsum.photos/50/50'
  );
  useEffect(()=>{
    apiClient.get('me').then(response=>{
      setImage(response.data.images[0].url)
    })
  },[])
  return (
    <div className='sidebar-container'>
        <img
        src={image}
        className='profile-img'/>

        <div>
            <SidebarButton title="Feed" to='/feed' icon={<MdSpaceDashboard/>} />
            <SidebarButton title="Trending" to='/trending' icon={<FaGripfire/>} />
            <SidebarButton title="Player" to='/player' icon={<FaPlayCircle/>} />
            <SidebarButton title="Favourites" to='/favourites' icon={<MdFavorite/>} />
            <SidebarButton title="Library" to='/' icon={<MdLocalLibrary/>} />
        </div>
        <div>
            <SidebarButton title='SignOut' to='' icon={<FaSignOutAlt/>}/>
        </div>

      
    </div>
  )
}
