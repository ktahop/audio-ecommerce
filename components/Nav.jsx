import NavLinks from "./NavLinks"
import logo from '../public/assets/shared/desktop/logo.svg'
import cart from '../public/assets/shared/desktop/icon-cart.svg'
import hamburger from '../public/assets/shared/tablet/icon-hamburger.svg'
import Image from "next/image"

const Nav = () => {
  return (
    <header className="bg-black">
      <nav className="container mx-auto px-[1rem] flex items-center justify-between text-white py-[50px]">
        <Image
          src={hamburger}
          alt="audiophile logo"
          className="lg:hidden"
        />
        <Image
          src={logo}
          alt="audiophile logo"
        />
        <div className="hidden lg:block relative left-[-4rem]">
          <NavLinks />
        </div>
        <Image 
          src={cart}
          alt="cart icon"
        />
      </nav>
    </header>
  )
}

export default Nav