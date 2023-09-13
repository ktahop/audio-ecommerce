import logo from '../public/assets/shared/desktop/logo.svg'
import facebook from '../public/assets/shared/desktop/icon-facebook.svg'
import instagram from '../public/assets/shared/desktop/icon-instagram.svg'
import twitter from '../public/assets/shared/desktop/icon-twitter.svg'
import Image from 'next/image'
import NavLinks from "./NavLinks"

const Footer = () => {
  const hrBar = {
    'width': '100px',
    'height': '3px',
    'backgroundColor': '#d87d4a',
    'border': 'none'
  }

  return (
    <footer className="bg-black text-dark-gray">
      <div className="container mx-auto px-[1rem]">
        <hr style={hrBar}/>
        <div className="py-[50px] flex flex-col items-center md:flex-row md:justify-between">
          <Image 
            src={logo}
            alt='audiophile logo'
            className='mb-[50px] md:mb-0'
          />
          <NavLinks />
        </div>
        <div className="text-center md:text-left md:w-1/2">
          <p>Audiophile is an all in one stap to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.</p>
        </div>
        <div className="py-[70px] flex flex-col md:flex-row items-center justify-between">
          <p>Copyright 2023. All Rights Reserved</p>
          <div className='mt-[50px] sm:mt-0 flex items-center gap-5 lg:relative lg:top-[-50px]'>
            <a href="#">
              <Image 
                src={facebook}
                alt='facebook icon'
                className='fill-pimary'
              />
            </a>
            <a href="#">
              <Image 
                src={twitter}
                alt='twitter icon'
              />
            </a>
            <a href="#">
              <Image 
                src={instagram}
                alt='instagram icon'
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer