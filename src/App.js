import React, { useState } from 'react'
import TodoList from './components/TodoList'
const App = ()=>{

    const [input, setInput] = useState('')
    const [items, setItems] = useState([])

    const listofItems =(e)=>{
        e.preventDefault(e)
        setItems((e)=>{
            return [...e, input]
        })

        setInput('')

    }

  
    return(

    <div className='sm:mt-24 mt-14 flex items-center justify-center'>
       
        <div className='sm:w-1/3 w-72 h-min bg-gray-100 shadow-lg rounded-xl' >
            <div className='py-7 flex items-center justify-center'>
                <h1 className='text-white h-auto w-screen text-center bg-red-400 text-xl sm:text-4xl py-4'>ToDO List</h1>
            </div>
           

            <form onSubmit={listofItems}> 
            <div className='flex items-center justify-center  sm:space-x-6 '>
            <input value={input} onChange={(e)=>setInput(e.target.value)} 
                className='sm:border-b-2 border-gray-900 py-2 px-0 sm:py-2 sm:px-5 outline-none sm:text-center placeholder-gray-400 focus:placeholder-gray-600 bg-gray-100' placeholder='add task.....' />

              <span className= ''>
              <button onClick={listofItems}
                 className='transition flex items-center justify-center text-white h-12 w-12 rounded-full sm:w-8 sm:h-8 sm:text-xl text-2xl  sm:rounded-full duration-500 ease-in-out bg-red-400 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110'>+</button>
              </span>
               
  </div>
            </form>
   
          

          {/* content */}
            <div className='py-4 pl-8'>
          <ol >
              {  items.map((item, id)=>{
                      return <TodoList
                       key={id}
                       id={id}
                        item={item}
                        setItems={setItems}
                        items= {item}
                        />
    

                  })  }
             
             
        
          </ol>
            </div>
     



        </div>
        

    </div>
    )
}
export default App