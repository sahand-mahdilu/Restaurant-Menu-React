import React from 'react'
import menu from '../Datas/Datas';

export default function Menu({Menus}) {

    console.log(Menus);
  return (
    <>

    {Menus.map(menu=>{

        return(

            <div key={menu.id} className='flex gap-4 w-full'>

            <div className='img_container w-60 h-40   '>
                <img className='w-full h-full object-cover' src={menu.img} alt="sda" />
            </div>
    
            <div>
    
    
          <div>
          <div className='w-full flex items-center justify-between'>
             <h2 className='font-bold text-lg' >{menu.title}</h2>
             <span className='font-bold text-yellow-600'>{menu.price}$</span>
             </div>
    
             <p className='description'>{menu.desc}</p>
    
          </div>
    
            </div>
    
    
        </div>

        )
    })}
   

    </>
  )
}
