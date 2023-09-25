import Category from "@/components/Category"
import About from "@/components/About"
import yx1Desktop from '../../public/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg'
import yx1Mobile from '../../public/assets/product-yx1-earphones/tablet/image-category-page-preview.jpg'
import Link from "next/link"
import Image from "next/image"

const Earphones = () => {
  return (
    <main>
      <div className="bg-black text-white text-center">
        <h2 className="px-[1rem] pt-[3rem] pb-[6rem]">Earphones</h2>
      </div>
      <div className="container mx-auto px-[1rem]">
        <section className="container mx-auto px-[1rem]">
          <div className="py-[3.5rem] flex flex-col items-center justify-center lg:flex-row lg:justify-evenly">
            <Image 
              src={yx1Desktop}
              alt="yx1 earphones"
              className="hidden max-w-[35%] lg:block"
            />
            <Image 
              src={yx1Mobile}
              alt="yx1 earphones"
              className="pb-[2rem] lg:hidden"
            />
            <div className="text-center flex flex-col gap-[1.5rem] lg:w-[40%] lg:text-left">
              <p className="over-line text-primary">New Product</p>
              <h2>YX1 Wireless<br />Earphones</h2>
              <p>
                Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.
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

export default Earphones