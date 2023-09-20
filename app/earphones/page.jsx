import Category from "@/components/Category"
import About from "@/components/About"

const Earphones = () => {
  return (
    <main>
      <div className="bg-black text-white text-center">
        <h2 className="px-[1rem] py-[3rem]">Earphones</h2>
      </div>
      <section className="container mx-auto px-[1rem]">
        <Category />
      </section>
      <section className="container mx-auto px-[1rem]">
        <About />
      </section>
    </main>
  )
}

export default Earphones