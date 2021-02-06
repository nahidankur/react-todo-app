import React from 'react'

const TodoList = ({item, id, items, setItems})=>{

      const deleteItems =()=>{
          setItems((e)=>{
              return e.filter((arrayEl, index)=>{
                  return id !==index
              })
          })
      }
    return(
        <div>
            {items !== '' ?       <div className='flex relative'>
                <li className='overflow-y-auto py-2 text-gray-700 text-xl font-md'>
      <span className='absolute inset-y-0 right-8'>
          <i onClick={()=>deleteItems(id)} 
       className="fa fa-trash text-gray-900 hover:text-red-600 cursor-pointer" aria-hidden="true"/></span>  
      
        { item}
    </li> 
    </div>: console.log('error')}
          

        </div>
    
    
    )
}

export default TodoList