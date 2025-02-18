import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Categories from './Components/Categories'

function App() {
  const [count, setCount] = useState(0)

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
