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
    <div className='py-[50px] flex flex-col md:flex-row justify-center gap-[30px]'>
      {thumbnails.map((img, idx) => (
        <div className='p-[1rem] flex flex-col items-center justify-end bg-light-gray rounded-[7px]'>
          <Image 
            key={idx}
            src={img.src}
            alt={img.alt}
            className='w-[250px]'
          />
          <h5>{img.alt}</h5>
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