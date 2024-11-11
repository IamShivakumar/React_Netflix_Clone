import React from 'react'
import './Home.css'
import NavBar from '../../components/Navbar/Navbar'
import herobanner from '../../assets/banner.jpg'
import hero_title_image from '../../assets/Breaking_Bad_logo.png'
import TitleCards from '../../components/Titlecards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <NavBar/>
      <div className="hero">
        <img src={herobanner} alt='' className='bannerImage'/>
        <div className="hero-caption">
        <img src={hero_title_image} alt='' className='titleImage'/>
          <p>A terminally ill chemistry teacher teams with a former student<br/> to manufacture crystal meth to secure his family's future.</p>
        <div className="hero-btns mt-3">
          <button className='btn btn-dark'><i class="bi bi-play-fill"></i> Play</button>
          <button className='btn btn-light ms-3'><i class="bi bi-info-circle"></i> More Info</button>
        </div>
        <TitleCards title="Popular on netflix" category={'popular'}/>
        </div>
      </div>
      <div className="more-cards">
      <TitleCards title={"Top Rated"} category={'top_rated'}/>
      <TitleCards  title={"Upcoming"} category={'upcoming'}/>
      <TitleCards title={"Top Pics for You"} category={'now_playing'}/>
      </div>
      <Footer />
    </div>
  )
}

export default Home