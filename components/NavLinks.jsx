const NavLinks = () => {
  return (
    <ul className="flex flex-col md:flex-row items-center justify-center gap-x-10 tracking-widest text-[14px] text-white">
      <li><a className="hover:text-primary transition-colors" href="#">HOME</a></li>
      <li><a className="hover:text-primary transition-colors" href="#">HEADPHONES</a></li>
      <li><a className="hover:text-primary transition-colors" href="#">SPEAKERS</a></li>
      <li><a  className="hover:text-primary transition-colors"href="#">EARPHONES</a></li>
    </ul>
  )
}

export default NavLinks