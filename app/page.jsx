import Nav from "@/components/Nav"

const Home = () => {
  return (
    <main className="bg-black">
      <div className="container relative mx-auto px-[1rem] bg-hero-mobile md:bg-hero-tablet lg:bg-hero-desktop bg-contain bg-center lg:bg-right bg-no-repeat h-[70vh] text-gray">
        <Nav />
        <div className="h-full flex items-center justify-center lg:justify-start">
          <div className="w-[400px] text-center lg:text-left">
            <div className="over-line">New Product</div>
            <h1 className="text-white">XX99 Mark II Headphones</h1>
            <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home