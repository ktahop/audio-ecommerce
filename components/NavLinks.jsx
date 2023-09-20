import Link from "next/link"

const NavLinks = () => {
  return (
    <ul className="flex flex-col md:flex-row items-center justify-center gap-[2.2rem] tracking-widest text-[14px] text-white">
      <li><Link className="hover:text-primary transition-colors" href="/">HOME</Link></li>
      <li><Link className="hover:text-primary transition-colors" href="/headphones">HEADPHONES</Link></li>
      <li><a className="hover:text-primary transition-colors" href="/speakers">SPEAKERS</a></li>
      <li><a  className="hover:text-primary transition-colors"href="/earphones">EARPHONES</a></li>
    </ul>
  )
}

export default NavLinks