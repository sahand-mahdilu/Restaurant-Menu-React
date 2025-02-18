import React from 'react'

export default function Menu() {
  return (
    <div className='flex gap-4 w-full'>

        <div className='img_container  w-40'>
            <img className='w-full h-full' src="./images/item-1.jpeg" alt="sda" />
        </div>

        <div>


      <div>
      <div className='w-full flex items-center justify-between'>
         <h2 className='font-bold' >Milk Shake</h2>
         <span className='text-yellow-600'>12$</span>
         </div>

         <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptas?</p>

      </div>

        </div>


    </div>
  )
}
