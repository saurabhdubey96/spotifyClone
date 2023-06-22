import React, { useEffect, useState } from 'react'
import APIKit from '../../spotify'
import './library.css'
import { IconContext } from 'react-icons';
import {AiFillPlayCircle} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

export default function Library() {
  const[playlists,setPlaylists]=useState(null);
  useEffect(()=>{ APIKit.get('me/playlists').then(function(response){
    setPlaylists(response.data.items)
    console.log(response.data.items)
  });
},[]);

const navigate=useNavigate();

const playPlaylist=(id)=>{
  navigate('/player',{state:{id:id}});
}
  return (
    <div className='screen-container' >
      <div className='library-body'>
      {playlists?.map((playlist)=>
      <div className='playlist-card' key={playlist.id} onClick={()=>playPlaylist(playlist.id)}>
      <img src={playlist.images[0].url} className='playlist-image' alt='playlist-Alt'/>
      <p className='playlist-title'>{playlist.name}</p>
      <p className='playlist-subtitle'>{playlist.tracks.total} Songs</p>
      <div className='playlist-fade'>
       <IconContext.Provider value={{size:"50px", color:"#e99d72"}}>
      <AiFillPlayCircle/>
       </IconContext.Provider>
      </div>
      </div>
      )}
      <div className='playlist-card'>
        <img 
        src="https://picsum.photos/50/50"
        className='playlist-image'
        />
       <p className='playlist-title'>hfh jfhk kfnf kdj</p>
       <p className='playlist-subtitle'>hfh Songs</p>
       <div className='playlist-fade'>
       <IconContext.Provider value={{size:"50px", color:"#e99d72"}}>
      <AiFillPlayCircle/>
       </IconContext.Provider>
      </div>
      </div>
      <div className='playlist-card'>hello</div>
      <div className='playlist-card'>hello</div>
      <div className='playlist-card'>hello</div>
      <div className='playlist-card'>hello</div>
      <div className='playlist-card'>hello</div>


      </div>
    </div>
  )
}
