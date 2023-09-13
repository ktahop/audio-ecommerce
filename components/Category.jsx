import headphones from '../public/assets/shared/desktop/image-category-thumbnail-headphones.png'
import speakers from '../public/assets/shared/desktop/image-category-thumbnail-speakers.png'
import earphones from '../public/assets/shared/desktop/image-category-thumbnail-earphones.png'
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
    <section className='flex justify-center gap-[10px]'>
      {thumbnails.map((img, idx) => (
        <div className='flex flex-col items-center justify-end'>
          <Image 
            key={idx}
            src={img.src}
            alt={img.alt}
            className='w-[300px]'
          />
          <h5>{img.alt}</h5>
        </div>
      ))}
    </section>
  )
}

export default Category