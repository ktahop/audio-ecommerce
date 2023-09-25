import Category from "@/components/Category"
import About from "@/components/About"
import zx9Desktop from '../../public/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg'
import zx9Mobile from '../../public/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg'
import zx7Desktop from '../../public/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg'
import zx7Mobile from '../../public/assets/product-zx7-speaker/tablet/image-category-page-preview.jpg'
import Link from "next/link"
import Image from "next/image"

const Speaker = () => {
  return (
    <main>
      <div className="bg-black text-white text-center">
        <h2 className="px-[1rem] pt-[3rem] pb-[6rem]">Speakers</h2>
      </div>
      <div className="container mx-auto px-[1rem]">
        <section className="py-[4rem]">
          <div className="py-[3.5rem] flex flex-col items-center justify-center lg:flex-row lg:justify-evenly">
            <Image 
              src={zx9Desktop}
              alt="xx99 mark 2 headphones"
              className="hidden max-w-[35%] lg:block"
            />
            <Image 
              src={zx9Mobile}
              alt="zx9 speaker"
              className="pb-[2rem] lg:hidden"
            />
            <div className="text-center flex flex-col gap-[1.5rem] lg:w-[40%] lg:text-left">
              <p className="over-line text-primary">New Product</p>
              <h2>ZX9<br />Speaker</h2>
              <p>
                Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity- creating new possibilities for more pleading and practical audio setups.
              </p>
              <Link href={''}>
                <button className="btn-one">SEE PRODUCT</button>
              </Link>
            </div>
          </div>
          <div className="py-[3.5rem] flex flex-col-reverse items-center justify-center lg:flex-row lg:justify-evenly">
            <div className="text-center flex flex-col gap-[1.5rem] lg:w-[40%] lg:text-left">
              <h2>ZX7<br />Speaker</h2>
              <p>
                Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high0end audiophile components that represents the top of the line powered speakers for home or studio use.
              </p>
              <Link href={''}>
                <button className="btn-one">SEE PRODUCT</button>
              </Link>
            </div>
            <Image 
              src={zx7Desktop}
              alt="zx7 speaker"
              className="hidden max-w-[35%] lg:block"
            />
            <Image 
              src={zx7Mobile}
              alt="xx99 mark 1 headphones"
              className="pb-[2rem] lg:hidden"
            />
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

export default Speaker