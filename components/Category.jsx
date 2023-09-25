import headphones from '../public/assets/shared/desktop/image-category-thumbnail-headphones.png'
import speakers from '../public/assets/shared/desktop/image-category-thumbnail-speakers.png'
import earphones from '../public/assets/shared/desktop/image-category-thumbnail-earphones.png'
import arrow from '../public/assets/shared/desktop/icon-arrow-right.svg'
import Image from 'next/image'
import Link from 'next/link'

const Category = () => {
  const thumbnails = [
    {
      'src': headphones,
      'alt': 'headphones',
      'link': '/headphones'
    }, 
    {
      'src': speakers,
      'alt': 'speakers',
      'link': '/speakers'
    }, 
    {
      'src': earphones,
      'alt': 'earphones',
      'link': '/earphones'
    }
  ]

  return (
    <div className='py-[3rem] flex flex-col md:flex-row justify-between gap-[2rem]'>
      {thumbnails.map((img, idx) => (
        <div className='py-[20px] flex flex-col items-center justify-end bg-light-gray rounded-[7px]'>
          <Image 
            key={idx}
            src={img.src}
            alt={img.alt}
            className='max-w-[60%]'
          />
          <p className='text-xl uppercase font-bold'>{img.alt}</p>
          <button className='btn-four mt-[10px] flex items-center gap-[10px]'>
            <Link href={img.link}>SHOP</Link>
            <Image 
              src={arrow}
              alt='arrow icon'
            />
          </button>
        </div>
      ))}
    </div>
  )
}

export default Category