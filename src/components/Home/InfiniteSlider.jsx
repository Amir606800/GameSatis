import React from 'react'
import Marquee from 'react-fast-marquee'

const InfiniteSlider = () => {
  return (
    <Marquee pauseOnHover speed={100}>
      <a href='/oyunlar/PUBG-Mobile' className="nav-element"><img src="https://img.gamesatis.com/showcase/5/pubg.svg" alt="PUBG" /></a>
      <div className="nav-element"><img src="https://img.gamesatis.com/showcase/850/fc25-36865.svg" alt="" /></div>
      <div className="nav-element"><img src="https://img.gamesatis.com/showcase/723/mobile-legends.svg" alt="MOBILE_LEGENDS" /></div>
      <div className="nav-element"><img src="https://img.gamesatis.com/showcase/26998/wartuneultra-61310.svg" alt="" /></div>
      <div className="nav-element"><img src="https://img.gamesatis.com/showcase/730/pashafencer-56450.svg" alt="" /></div>
      <div className="nav-element"><img src="https://img.gamesatis.com/showcase/728/steam.svg" alt="" /></div>
      <div className="nav-element"><img src="https://img.gamesatis.com/showcase/17317/gms_cdkey-3-53616.svg" alt="" /></div>
      <div className="nav-element"><img src="https://img.gamesatis.com/showcase/8/metin2.svg" alt="" /></div>
      <div className="nav-element"><img src="https://img.gamesatis.com/showcase/850/fc25-36865.svg" alt="" /></div>
      <div className="nav-element"><img src="https://img.gamesatis.com/showcase/743/point-blank.svg" alt="" /></div>
      <div className="nav-element"><img src="https://img.gamesatis.com/showcase/728/steam.svg" alt="" /></div>
      <div className="nav-element"><img src="https://img.gamesatis.com/showcase/730/pashafencer-56450.svg" alt="" /></div>

    </Marquee>
  )
}

export default InfiniteSlider