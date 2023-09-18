import Nav from "@/components/Nav"
import Category from "@/components/Category"
import zx9Speaker from '../public/assets/home/desktop/image-speaker-zx9.png'
import yx1Earphones from '../public/assets/home/desktop/image-earphones-yx1.jpg'
import Image from "next/image"

const Home = () => {
  return (
    <main>
      <div className="bg-black">
        <div className="container px-[1rem] mx-auto bg-hero-mobile md:bg-hero-tablet lg:bg-hero-desktop bg-contain bg-center lg:bg-right bg-no-repeat h-[100vh] text-dark-gray">
          <Nav />
          <div className="pt-[200px] flex items-center justify-center lg:justify-start">
            <div className="flex flex-col items-center lg:items-start gap-[30px] w-[400px] text-center lg:text-left">
              <div className="over-line">New Product</div>
              <h1 className="text-white">XX99 Mark II Headphones</h1>
              <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
              <button className="btn-one">SEE PRODUCT</button>
            </div>
          </div>
        </div>
      </div>
      <section className="container mx-auto px-[1rem]">
        <Category />
      </section>
      <section className="container mx-auto mb-[50px] px-[1rem]">
        <div className="py-[50px] bg-primary bg-circle-pattern bg-bottom lg:bg-left bg-no-repeat rounded-[7px] flex flex-col lg:flex-row items-center justify-evenly relative">
          <Image 
            src={zx9Speaker}
            alt='zx9 speaker'
            className="w-[200px] mb-[50px]"
          />
          <div className="w-[300px] text-white text-center lg:text-left flex flex-col items-center lg:items-start gap-[20px]">
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
          src={yx1Earphones}
          alt='yx1 earphones'
          className="rounded-[7px]"
        />
        <div className="w-full lg:w-[40%] py-[50px] lg:py-[100px] pl-[1.5rem] bg-light-gray rounded-[7px] flex flex-col justify-center gap-[20px]">
          <h2>YX1 Earphones</h2>
          <button className="btn-two">SEE PRODUCT</button>
        </div>
      </section>
    </main>
  )
}

export default Home