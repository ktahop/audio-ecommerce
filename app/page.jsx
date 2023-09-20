import Nav from "@/components/Nav"
import Category from "@/components/Category"
import About from "@/components/About"
import zx9Speaker from '../public/assets/home/desktop/image-speaker-zx9.png'
import desktopEarphones from '../public/assets/home/desktop/image-earphones-yx1.jpg'
import tabletEarphones from '../public/assets/home/tablet/image-earphones-yx1.jpg'
import mobileEarphones from '../public/assets/home/mobile/image-earphones-yx1.jpg'
import Image from "next/image"

const Home = () => {
  return (
    <main>
      <div className="bg-black">
        <div className="container px-[1rem] mx-auto text-dark-gray bg-hero-mobile bg-contain bg-no-repeat bg-center md:bg-hero-tablet lg:bg-right lg:bg-hero-desktop">
          <Nav />
          <div className="pt-[50px] pb-[100px] flex items-center justify-center lg:justify-start">
            <div className="max-w-[400px] text-center shrink lg:text-left">
              <div className="over-line mb-[30px]">New Product</div>
              <h1 className="text-white mb-[30px]">XX99 Mark II Headphones</h1>
              <p className="mb-[30px]">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
              <button className="btn-one">SEE PRODUCT</button>
            </div>
          </div>
        </div>
      </div>
      <section className="container mx-auto px-[1rem]">
        <Category />
      </section>
      <section className="container mx-auto mb-[50px] px-[1rem]">
        <div className="py-[50px] rounded-[7px] bg-primary bg-circle-pattern bg-bottom bg-no-repeat lg:bg-left flex flex-col items-center justify-evenly lg:flex-row">
          <Image 
            src={zx9Speaker}
            alt='zx9 speaker'
            className="w-[200px] mb-[50px]"
          />
          <div className="max-w-[300px] text-white text-center flex flex-col gap-[20px] items-center lg:text-left lg:items-start ">
            <h2>ZX9<br /> Speaker</h2>
            <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <button className="btn-three">SEE PRODUCT</button>
          </div>
        </div>
      </section>
      <section className="container mx-auto mb-[50px] px-[1rem] ">
        <div className="py-[100px] pl-[20px] flex flex-col gap-[20px] rounded-[7px] bg-zx7 bg-cover bg-center md:bg-right-top bg-no-repeat">
          <h2>ZX7 Speaker</h2>
          <button className="btn-two">SEE PRODUCT</button>
        </div>
      </section>
      <section className="container mx-auto mb-[50px] px-[1rem] flex flex-col md:flex-row items-center justify-between gap-[10px]">
        <Image 
          src={desktopEarphones}
          alt='yx1 earphones'
          className="rounded-[7px] hidden lg:block"
        />
        <Image 
          src={tabletEarphones}
          alt='yx1 earphones'
          className="rounded-[7px] hidden md:block lg:hidden"
        />
        <Image 
          src={mobileEarphones}
          alt='yx1 earphones'
          className="rounded-[7px] md:hidden"
        />
        <div className="w-full lg:w-[40%] py-[50px] lg:py-[100px] pl-[1.5rem] bg-light-gray rounded-[7px] flex flex-col justify-center gap-[20px]">
          <h2>YX1 Earphones</h2>
          <button className="btn-two">SEE PRODUCT</button>
        </div>
      </section>
      <section className="container mx-auto px-[1rem]">
        <About />
      </section>
    </main>
  )
}

export default Home