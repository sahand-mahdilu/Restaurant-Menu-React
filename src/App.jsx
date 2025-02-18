
import { useState } from 'react'
import './App.css'
import Categories from './Components/Categories'
import menu from './Datas/Datas'


const allCategories= [ "all",...new Set(menu.map(m=>m.category))]



function App() {

  console.log(allCategories);

  const [allMenus,setAllMenus]=useState(menu)
  const [categoris, setCategories]=useState()

  return (
    <>
    <div>
      <div className='flex flex-col justify-center items-center'>
     <h1 className='text-center font-bold text-3xl mt-5'>Our Menu</h1>
     <div className='mt-2 w-20 h-1 bg-yellow-600'></div>

      </div>

      <div className=' categories w-[100%] flex justify-center items-center mt-6'>
        <Categories/>
      </div>


    </div>
    </>
  )
}

export default App
