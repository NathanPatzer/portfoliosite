import React from 'react'
import YouTube from 'react-youtube';
import Slider from './Slider'
import { useMediaQuery } from 'react-responsive';

const desktopdims = {
  height: '630px',
  width: '630px'
}
const mobiledims = {
  height: '80vw',
  width: '80vw'
}
const desktopopts = {height: '390', width: '630'}
const mobileopts = {height: '200', width: window.innerWidth * .801}


const Project = (props) => {
  const {image,name,desc,logo,link,vid,langs,slides,date} = props
  
  
  const isMobile = useMediaQuery({query: '(max-width: 700px)'})

  return (
    <div>
      <div className='logoheader'>
        <h2>{name}</h2>
        {logo ? (<a href={link} target="_blank" rel="noopener noreferrer"><img  title = 'Github' src = {logo} alt = "pic"/></a>): ''}
      </div>
      <h3>{date}</h3>
      <div>{Array.isArray(desc) ? (
        desc.map((item,index) => (
          <p key={index}>{item}</p>
        ))
      ) : desc}
      </div>
      {vid ? (
        <div className='vid'>
        <YouTube videoId={vid} opts={isMobile ? (mobileopts) : (desktopopts)}/>
        </div>
      ) : slides ? (
        <Slider slides = {slides} dims = {isMobile ? (mobiledims) : (desktopdims)} radius = '5px'/>
      ) : image ? (
        <img className = 'project' src = {image} alt = 'pic'/>
      ) : ''}
      {langs ? (<div className='languages'>
        {langs?.map((logos) => (
          <img key = {logos} title = {logos[1]} src={logos[0]} alt = "pic"/>
        ))}
      </div>) : ''}
    </div>
  )
}

export default Project
