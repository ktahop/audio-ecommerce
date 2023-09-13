import NavLinks from "./NavLinks"
import logo from '../public/assets/shared/desktop/logo.svg'
import cart from '../public/assets/shared/desktop/icon-cart.svg'
import hamburger from '../public/assets/shared/tablet/icon-hamburger.svg'
import Image from "next/image"

const Nav = () => {
  return (
    <>
      <nav className="flex items-center justify-between text-white py-[50px]">
        <Image
          src={hamburger}
          alt="audiophile logo"
          className="lg:hidden"
        />
        <Image
          src={logo}
          alt="audiophile logo"
        />
        <div className="hidden lg:block">
          <NavLinks />
        </div>
        <Image 
          src={cart}
          alt="cart icon"
        />
      </nav>
      <hr className="opacity-30"/>
    </>
  )
}

export default Nav