import mobileBestGear from '../public/assets/shared/mobile/image-best-gear.jpg'
import tabletBestGear from '../public/assets/shared/tablet/image-best-gear.jpg'
import desktopBestGear from '../public/assets/shared/desktop/image-best-gear.jpg'
import Image from 'next/image'

const About = () => {
  return (
    <div className='py-[150px] lg:flex flex-row-reverse items-center justify-between gap-[10px]'>
      <Image 
        src={mobileBestGear}
        alt='a person wearing headphones'
        className='rounded-[7px] mb-[30px] md:hidden'
      />
      <Image 
        src={tabletBestGear}
        alt='a person wearing headphones'
        className='rounded-[7px] mb-[30px] hidden md:block lg:hidden'
      />
      <Image 
        src={desktopBestGear}
        alt='a person wearing headphones'
        className='rounded-[7px] mb-[30px] hidden lg:block'
      />
      <div className="text-center lg:w-[40%] lg:text-left">
        <h2 className="mb-[30px]">Bringing you the <span className="text-primary">best</span> audio gear</h2>
        <p className="text-darker-gray">
          Located at the heard of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  )
}

export default About