import { FaRegSadCry } from "react-icons/fa"; 
import { AiOutlinePlus } from "react-icons/ai"
import { v4 as uuidv4 } from 'uuid'
import React, { useState } from 'react'
import Container from './Container'
import TodoItem from "./TodoItem"
import Types from "./Types"
const Content = () => {
  const defaultTodos = JSON.parse(localStorage.getItem("todos")) || [
    {
      id: 1,
      complete: false,
      title: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: 2,
      complete: false,
      title: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: 3,
      complete: false,
      title: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: 4,
      complete: false,
      title: "Lorem ipsum dolor sit amet consectetur.",
    },
  ]

  const [todoData, setTodoData] = useState(defaultTodos)
  const [formValue, setFormValue] = useState("")


  function addTodo(value) {
    if (value.trim().length > 0) {
      const newTodo = {
        id: uuidv4(),
        complete: false,
        title: value
      }

      setTodoData(prev => {
        const updatedTodos = [...prev, newTodo]
        localStorage.setItem("todos", JSON.stringify(updatedTodos))
        return updatedTodos
      })

      setFormValue("")
    }
  }

  const deleteTodo = () => {
    setTodoData(prev => {
      const complatedTodos = prev.filter(prevItem => {
        if (!prevItem.complete) {
          return prevItem
        }
      })
      localStorage.setItem("todos", JSON.stringify(complatedTodos))
      return complatedTodos
    })
  }



  return (
    <div className='z-50 flex justify-center items-center relative w-[100%] '>
      <Container className='flex justify-center items-center flex-col gap-10 absolute top-[100px] py-[50px] '>
        <form className='flex justify-between items-center w-[100%] relative'>

          <input
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            className=' placeholder:text-[#3e3e3e] outline-none rounded-lg bg-[#ffffff5c] backdrop-blur w-[100%] py-2 px-5'
            type="text"
            placeholder="Create a new todo..." />

          <div
            className=" hover:border-2 text-[20px] active:scale-95 hover:border-gray-900 hover:rounded-full absolute right-0 top-0 bottom-0 flex justify-center items-center w-[36px] h-[36px]  duration-500 ">
            <button onClick={(e) => {
              e.preventDefault()
              addTodo(formValue)
            }}>
              <AiOutlinePlus />
            </button>
          </div>
        </form>

        <div className="flex flex-col gap-6 items-center justify-center w-[100%] h-[60vh]">
          <div className="todo-content relative">
            <div className=" min-h-[60vh] overflow-y-scroll w-[100%] mm:py-3 py-10">
              {todoData.length >0 ? todoData.map(item => (
                <TodoItem item={item} key={item.id} setTodoData={setTodoData} formValue={formValue} setFormValue={setFormValue}/>
              )) : 
              <div className="flex justify-center items-center h-[100%] gap-3 text-[20px] opacity-75">Nothing yet no <FaRegSadCry  /></div>}
            </div>
            <div className=" absolute bottom-0 bg-colorLight flex dark:bg-colorDark z-1 justify-between items-center w-[100%] px-4 py-5 text-[16px]">
              <div className="opacity-50 hover:opacity-100 dark:text-white font-light text-center mm:text-start cursor-default text-[14px] lg:w-[30%] w-[50%] sm:w-[20%]">
                {todoData.length} item left
              </div>
              <Types
                setTodoData={setTodoData}
                className={"mm:flex hidden w-[50%]"} />
              <button
                onClick={() => deleteTodo()}
                className="cursor-pointer text-[14px] active:scale-95 duration-200 hover:opacity-100 dark:text-white w-[50%] sm:w-[30%] lg:w-[30%]">
                Clear Completed
              </button>
            </div>
          </div>
          <Types
            setTodoData={setTodoData}
            className={"flex mm:hidden shadow-lg w-[100%] gap-6 p-2 bg-[#cdcdcdb4] rounded-xl dark:bg-[#a9a9a910] dark:backdrop-blur"} />
        </div>
      </Container>
    </div>
  )
}

export default Content

