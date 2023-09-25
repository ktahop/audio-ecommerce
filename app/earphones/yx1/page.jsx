import yx1Desktop from '../../../public/assets/product-yx1-earphones/desktop/image-product.jpg'
import yx1Tablet from '../../../public/assets/product-yx1-earphones/tablet/image-product.jpg'
import yx1Mobile from '../../../public/assets/product-yx1-earphones/mobile/image-product.jpg'
import Category from '@/components/Category'
import About from '@/components/About'
import Image from "next/image"
import Link from "next/link"

const YX1 = () => {
  return (
    <main>
      <div className="container mx-auto px-[1rem]">
        <section className="mb-[6rem]">
          <div className="py-[3.5rem] flex flex-col items-center justify-center gap-[5rem] md:flex-row lg:justify-evenly">
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
              <Link href={'/earphones/yx1'}>
                <button className="btn-one">SEE PRODUCT</button>
              </Link>
            </div>
          </div>
          <div className='flex flex-col items-start justify-start lg:flex-row gap-[5rem]'>
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