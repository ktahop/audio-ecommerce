import Nav from "@/components/Nav"
import Category from "@/components/Category"

const Home = () => {
  return (
    <main>
      <div className="bg-black">
        <div className="container mx-auto px-[1rem] bg-hero-mobile md:bg-hero-tablet lg:bg-hero-desktop bg-contain bg-center lg:bg-right bg-no-repeat h-[70vh] text-dark-gray">
          <Nav />
          <div className="flex pt-[100px] items-center justify-center lg:justify-start">
            <div className="flex flex-col items-center lg:items-start gap-[30px] w-[400px] text-center lg:text-left">
              <div className="over-line">New Product</div>
              <h1 className="text-white">XX99 Mark II Headphones</h1>
              <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
              <button className="btn-one">SEE PRODUCT</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-[1rem]">
        <Category />
      </div>
    </main>
  )
}

export default Home