import Category from "@/components/Category"
import About from "@/components/About"


const Headphones = () => {
  return (
    <main>
      <div className="bg-black text-white text-center">
        <h2 className="px-[1rem] py-[3rem]">Headphones</h2>
      </div>
      <div className="container mx-auto px-[1rem]">
        <section>

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