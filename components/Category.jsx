import headphones from '../public/assets/shared/desktop/image-category-thumbnail-headphones.png'
import speakers from '../public/assets/shared/desktop/image-category-thumbnail-speakers.png'
import earphones from '../public/assets/shared/desktop/image-category-thumbnail-earphones.png'
import arrow from '../public/assets/shared/desktop/icon-arrow-right.svg'
import Image from 'next/image'

const Category = () => {
  const thumbnails = [
    {
      'src': headphones,
      'alt': 'headphones'
    }, 
    {
      'src': speakers,
      'alt': 'speakers'
    }, 
    {
      'src': earphones,
      'alt': 'earphones'
    }
  ]

  return (
    <div className='py-[50px] flex flex-col md:flex-row justify-between gap-[30px]'>
      {thumbnails.map((img, idx) => (
        <div className='py-[20px] flex flex-col items-center justify-end bg-light-gray rounded-[7px]'>
          <Image 
            key={idx}
            src={img.src}
            alt={img.alt}
          />
          <p className='text-2xl uppercase font-bold'>{img.alt}</p>
          <button className='btn-four mt-[10px] flex items-center gap-[10px]'>
            SHOP
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