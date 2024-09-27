import { BiCheck } from "react-icons/bi";
import { FiCheckCircle } from "react-icons/fi"
import { AiOutlineEdit } from "react-icons/ai"
import { BiTrashAlt } from "react-icons/bi"
import { BiCircle } from "react-icons/bi"
import React, { useState } from 'react'
import { useSelector } from "react-redux";

const TodoItem = ({ item, setTodoData }) => {


    const todoTitle = useSelector(state => state)


    console.log(todoTitle)


    const [edit, setEditMode] = useState(false)
    const [formValue, setFormValue] = useState(item.title) 

    const deleteTodo = () => {
        setTodoData(prev => {
            const updatedTodos = prev.filter(prevItem => prevItem.id !== item.id)
            localStorage.setItem("todos", JSON.stringify(updatedTodos))
            return updatedTodos
        })
    }


    const complete = () => {
        setTodoData(prev => {
            const complatedTodos = prev.map(prevItem => {
                if (prevItem.id === item.id) {
                    console.log("1")
                    return {
                        ...prevItem,
                        complete: !prevItem.complete
                    }
                }
                return prevItem
            })
            localStorage.setItem("todos", JSON.stringify(complatedTodos))
            return complatedTodos
        })
    }



    const editMode = () => {
        setEditMode(prev => prev = !prev)
    }

    const saveEdit = () => {
        setTodoData(prev => {
            const updatedTodos = prev.map(prevItem => {
                if (prevItem.id === item.id) {
                    return {
                        ...prevItem,
                        title: formValue 
                    }
                }
                return prevItem
            })
            localStorage.setItem("todos", JSON.stringify(updatedTodos))
            return updatedTodos
        })
        editMode() 
    }

    return (
        <div className='dark:text-colorLight flex justify-between items-center gap-3 w-[100%] px-[15px] py-3 border-b-[1px] border-gray-700 last:border-b-0 group cursor-default'>
            <div className="text-[22px] hover:text-[24px] active:scale-95 duration-300 w-[5%] justify-center items-center flex">
                <button onClick={complete}>
                    {item.complete ? <FiCheckCircle /> : <BiCircle />}
                </button>
            </div>
            <div
                className={`ss:w-[85%] w-[70%] mm:text-[18px] text-[14px] text-ellipsis min-w-[150px] duration-500 whitespace-nowrap truncate ${item.complete ? "line-through opacity-50" : ""}`}>
                {edit ? (
                    <input
                        onChange={(e) => setFormValue(e.target.value)}
                        className='placeholder:text-[#3e3e3e] outline-none rounded-lg bg-[#ffffff11] backdrop-blur w-[100%] pl-1 '
                        type="text"
                        value={formValue}
                    />
                ) : (
                    item.title
                )}
            </div>
            <div className="w-[15%] ss:w-[10%] text-[20px] flex justify-between items-center gap-2 opacity-100 mm:opacity-0 group-hover:opacity-100 duration-500">
                <button
                    onClick={() => {
                        if (edit) {
                            saveEdit()
                        } else {
                            editMode()
                        }
                    }}
                    className="duration-300 active:scale-95 hover:text-[24px] opacity-50 hover:opacity-100 hover:text-blue-600">
                    {!edit ? <AiOutlineEdit /> : <BiCheck className=" opacity-100 text-green-500 text-[30px]" />}
                </button>
                <button
                    onClick={deleteTodo}
                    className={`duration-500 active:scale-95 hover:text-[24px] opacity-50 hover:opacity-100 hover:text-red-600 ${item.complete ? "text-red-600" : ""}`}>
                    <BiTrashAlt />
                </button>
            </div>
        </div>
    )
}

export default TodoItem