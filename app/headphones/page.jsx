import Category from "@/components/Category"
import About from "@/components/About"
import xx99Mark2Desktop from '../../public/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg'
import xx99Mark2Mobile from '../../public/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg'
import xx99Mark1Desktop from '../../public/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg'
import xx99Mark1Mobile from '../../public/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg'
import xx59Desktop from '../../public/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg'
import xx59Mobile from '../../public/assets/product-xx59-headphones/tablet/image-category-page-preview.jpg'
import Link from "next/link"
import Image from "next/image"


const Headphones = () => {
  return (
    <main>
      <div className="bg-black text-white text-center">
        <h2 className="px-[1rem] pt-[3rem] pb-[6rem]">Headphones</h2>
      </div>
      <div className="container">
        <section className="py-[4rem]">
          <div className="py-[3.5rem] flex flex-col items-center justify-center lg:flex-row lg:justify-evenly">
            <Image 
              src={xx99Mark2Desktop}
              alt="xx99 mark 2 headphones"
              className="hidden max-w-[35%] lg:block"
            />
            <Image 
              src={xx99Mark2Mobile}
              alt="xx99 mark 2 headphones"
              className="pb-[2rem] lg:hidden"
            />
            <div className="text-center flex flex-col gap-[1.5rem] lg:w-[40%] lg:text-left">
              <p className="over-line text-primary">New Product</p>
              <h2>XX99 Mark II<br />Headphones</h2>
              <p>
                The new XX99 Mark II headphones is the pinnical of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.
              </p>
              <Link href={''}>
                <button className="btn-one">SEE PRODUCT</button>
              </Link>
            </div>
          </div>
          <div className="py-[3.5rem] flex flex-col-reverse items-center justify-center lg:flex-row lg:justify-evenly">
            <div className="text-center flex flex-col gap-[1.5rem] lg:w-[40%] lg:text-left">
              <h2>XX99 Mark I<br />Headphones</h2>
              <p>
                As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.
              </p>
              <Link href={''}>
                <button className="btn-one">SEE PRODUCT</button>
              </Link>
            </div>
            <Image 
              src={xx99Mark1Desktop}
              alt="xx99 mark 1 headphones"
              className="hidden max-w-[35%] lg:block"
            />
            <Image 
              src={xx99Mark1Mobile}
              alt="xx99 mark 1 headphones"
              className="pb-[2rem] lg:hidden"
            />
          </div>
          <div className="py-[3.5rem] flex flex-col items-center justify-center lg:flex-row lg:justify-evenly">
            <Image 
              src={xx59Desktop}
              alt="xx59 headphones"
              className="hidden max-w-[35%] lg:block"
            />
            <Image 
              src={xx59Mobile}
              alt="xx59 headphones"
              className="pb-[2rem] lg:hidden"
            />
            <div className="text-center flex flex-col gap-[1.5rem] lg:w-[40%] lg:text-left">
              <h2>XX59<br />Headphones</h2>
              <p>
                Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.
              </p>
              <Link href={''}>
                <button className="btn-one">SEE PRODUCT</button>
              </Link>
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

export default Headphones