import yx1Desktop from '../../../public/assets/product-yx1-earphones/desktop/image-product.jpg'
import yx1Tablet from '../../../public/assets/product-yx1-earphones/tablet/image-product.jpg'
import yx1Mobile from '../../../public/assets/product-yx1-earphones/mobile/image-product.jpg'
import gallery1Desktop from '../../../public/assets/product-yx1-earphones/desktop/image-gallery-1.jpg'
import gallery2Desktop from '../../../public/assets/product-yx1-earphones/desktop/image-gallery-2.jpg'
import gallery3Desktop from '../../../public/assets/product-yx1-earphones/desktop/image-gallery-3.jpg'
import gallery1Mobile from '../../../public/assets/product-yx1-earphones/mobile/image-gallery-1.jpg'
import gallery2Mobile from '../../../public/assets/product-yx1-earphones/mobile/image-gallery-2.jpg'
import gallery3Mobile from '../../../public/assets/product-yx1-earphones/mobile/image-gallery-3.jpg'
import Category from '@/components/Category'
import About from '@/components/About'
import Image from "next/image"
import Link from "next/link"

const YX1 = () => {
  return (
    <main className='text-darker-gray'>
      <div className="container">
        <div className='font-bold text-darker-gray mt-[5rem]'>
          <Link href='/' className='hover:text-primary transition-colors'>Go Back</Link>
        </div>
        <section className="mb-[6rem]">
          <div className="py-[3.5rem] flex flex-col items-center justify-between gap-[5rem] md:flex-row">
            <Image 
              src={yx1Desktop}
              alt="yx1 earphones"
              className="hidden max-w-[35%] lg:block"
            />
            <Image 
              src={yx1Tablet}
              alt="yx1 earphones"
              className="pb-[2rem] max-w-[35%] hidden md:block lg:hidden"
            />
            <Image 
              src={yx1Mobile}
              alt="yx1 earphones"
              className="pb-[2rem] max-w-[80%] md:hidden"
            />
            <div className="flex flex-col gap-[1.5rem] lg:w-[40%]">
              <p className="over-line text-primary">New Product</p>
              <h2>YX1 Wireless<br />Earphones</h2>
              <p>
                Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.
              </p>
              <p className='font-bold'>$ 599</p>
              <button className='btn-one'>ADD TO CART</button>
            </div>
          </div>
          <div className='pt-[5rem] flex flex-col items-start justify-start lg:flex-row gap-[5rem]'>
            <div className='lg:w-1/2'>
              <h2 className='pb-[2rem]'>Features</h2>
              <p className='pb-[2rem]'>
                Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.
              </p>
              <p>
                The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.
              </p>
            </div>
            <div className='flex flex-col gap-[2rem] md:flex-row md:gap-[6rem] lg:flex-col lg:gap-[2rem]'>
              <h2>In The Box</h2>
              <ul>
                <li><span className='text-primary font-bold mr-[1.5rem]'>1x</span>Headphone Unit</li>
                <li><span className='text-primary font-bold mr-[1.5rem]'>2x</span>Replacement Earcups</li>
                <li><span className='text-primary font-bold mr-[1.5rem]'>1x</span>User Manual</li>
                <li><span className='text-primary font-bold mr-[1.5rem]'>1x</span>3.5mm 5m Audio Cable</li>
                <li><span className='text-primary font-bold mr-[1.5rem]'>1x</span>Travel Bag</li>
              </ul>
            </div>
          </div>
        </section>
        <section className='py-[5rem] flex flex-col justify-center items-center gap-[2rem] lg:flex-row'>
          <div className='flex flex-col gap-[2rem]'>
            <Image 
              src={gallery1Desktop}
              alt='yx1 earphones'
              className='rounded-[7px] hidden lg:block'
            />
            <Image 
              src={gallery2Desktop}
              alt='yx1 earphones inside charging case'
              className='rounded-[7px] hidden lg:block'
            />
            <Image 
              src={gallery1Mobile}
              alt='yx1 earphones'
              className='rounded-[7px] lg:hidden'
            />
            <Image 
              src={gallery2Mobile}
              alt='yx1 earphones inside charging case'
              className='rounded-[7px] lg:hidden'
            />
          </div>
          <Image 
              src={gallery3Desktop}
              alt='yx1 earphones and charging case'
              className='rounded-[7px] hidden lg:block'
            />
          <Image 
              src={gallery3Mobile}
              alt='yx1 earphones and charging case'
              className='rounded-[7px] lg:hidden'
            />
        </section>
        <section>
          <Category />
        </section>
        <section>
          <About />
        </section>
      </div>
    </main>
  )
}

export default YX1