import Category from "@/components/Category"
import About from "@/components/About"

const Speaker = () => {
  return (
    <main>
      <div className="bg-black text-white text-center">
        <h2 className="px-[1rem] py-[3rem]">Speakers</h2>
      </div>
      <div className="container mx-auto px-[1rem]">
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