import React, { useEffect, useRef, useState } from 'react'
import './Titlecards.css'
import cards_data from '../../assets/Cards/Cards_data'
import { Link } from 'react-router-dom'

const TitleCards = ({title,category}) => {
  const cardsRef=useRef()
  const [apiData,setApiData]=useState([])
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYWUzOWRmYTkzZWI3ZjdhOWJjNDNkOTlkNjVhYmYzMyIsIm5iZiI6MTczMTMyNjA3My40ODM3MTIyLCJzdWIiOiI2NzMxZWYyNTRjZWU0ZmM4ZDVkMTg5ZWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.WrJVSqipSJJEkjc-_GErlvUUKFZ4j6fw4ENDmA2LfGM'
    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));},[])
  const handleWheel=(event)=>{
    event.preventDefault()
    cardsRef.current.scrollLeft+=event.deltaY
  }
  useEffect(()=>{
    cardsRef.current.addEventListener('wheel',handleWheel)
  },[])
  return (
<div className="title-cards">
  <h2>{title?title:"Popular on Netflix"}</h2>
  <div className="card-list" ref={cardsRef}>
    {apiData.map((card,index)=>{
      return <Link to={`/player/${card.id}`} className="card" key={index}>
        <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt=""/>
        <p className='text-white'>{card.original_title}</p>
      </Link>
    })}
  </div>
</div>  
)
}

export default TitleCards