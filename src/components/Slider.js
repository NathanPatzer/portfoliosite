import React from 'react'
import {useState} from 'react' 
import { useMediaQuery } from 'react-responsive';
const Slider = (props) => {
    const {slides,dims,radius} = props
    const [currIdx,setCurridx] = useState(0);

    const desktopsliderStyles = {
        height: dims.height,
        width: dims.width,
        padding: '5px',
        paddingBottom: '0px',
        position: 'relative',
        display: 'block',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    }

    const mobilesliderStyles = {
      height: dims.height,
      width: dims.width,
      paddingBottom: '0px',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      marginRight: '0',
      

  }

    const desktopslideStyles = {
        height: dims.height,
        width: dims.width,
        backgroundPosition: 'Center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currIdx].url})`,
        backgroundRepeat: 'no-repeat',
        borderRadius: radius
      }

      const mobileslideStyles = {
        height: dims.height,
        width: dims.width,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currIdx].url})`,
        backgroundRepeat: 'no-repeat',
        borderRadius: radius
      }


    const clickLeft = () => {
      const isFirstSlide = currIdx === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currIdx - 1;
      console.log(newIndex);
      setCurridx(newIndex);
    };

    const clickRight = () => {
      const isLastSlide = currIdx === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currIdx + 1;
      console.log(newIndex);
      setCurridx(newIndex);
    };

    const isMobile = useMediaQuery({query: '(max-width: 700px)'})

  return (
    <div style={isMobile ? (mobilesliderStyles) : (desktopsliderStyles)}>
        <div className='rightarrow' onClick={clickRight}>»</div>
        <div className='leftarrow' onClick={clickLeft}>«</div>
        <div style = {isMobile ? (mobileslideStyles) : (desktopslideStyles)}/>
    </div>
  )
}

export default Slider
