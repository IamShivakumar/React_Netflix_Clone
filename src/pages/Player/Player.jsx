import React, { useEffect, useState } from 'react'
import './Player.css'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Player = () => {
  const {id}=useParams()
  const navigate=useNavigate()
  const [videoData,setVideodata]=useState({
    name:"",key:"",published_at:"",
    type:""
  })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: import.meta.env.VITE_TMDB_AUTHORIZATION
    }
  };
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setVideodata(res.results[0]))
    .catch(err => console.error(err));},[])
  return (
<div className="player">
<i class="bi bi-arrow-left-circle-fill text-white" onClick={()=>navigate(-2)}> </i>
<iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${videoData.key}`} title='Trailer' frameBorder='0' allowFullScreen></iframe>
<div className="player-info">
  <p>{videoData.published_at.slice(0,10)}</p>
  <p>{videoData.name}</p>
  <p>{videoData.type}</p>
</div>
</div>  
)
}

export default Player