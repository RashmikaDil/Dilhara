import bg from './img/bg.png'
import './App.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faHome } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Home from './components/Home';
import Contact from './components/Contact';
function App() {


  const [menu , setMenu] = useState(1);
  
  return (
    <>
    
      <div className="w-full h-screen flex items-center justify-center bg-cover bg-center" style={{
        backgroundImage: `url(${bg})`,
      }}>

{menu === 1 ? <Home></Home> :   menu === 2 ? <Contact></Contact> : <h1>Loading...</h1>}


<div className='fixed bottom-0 text-gray-500 text-xs mt-2'>©
 2025 Rashmika Dilhara</div>
<div className=' fixed bottom-0 p-2 flex gap-1 '>
 








<div onClick={() => setMenu(1)} className='w-20 h-20 relative  flex items-center justify-center hover:opacity-50 cursor-pointer '>
 <FontAwesomeIcon icon={faHome} onClick={() => setMenu(1)} className={`text-2xl cursor-pointer  ${menu===1 ? "text-yellow-500" : "text-yellow-200" }`}></FontAwesomeIcon>
  
  
</div>


<div onClick={() => setMenu(2)} className=' w-20 h-20 relative  flex items-center justify-center  hover:opacity-50 cursor-pointer rounded-t-3xl'>
 <FontAwesomeIcon icon={faAddressBook} onClick={() => setMenu(2)}  className={`text-2xl cursor-pointer  ${menu===2 ? "text-yellow-500" : "text-yellow-200" }`}></FontAwesomeIcon>
  
  
</div>

</div>

</div>





     

      

    </>
  )
}

export default App
