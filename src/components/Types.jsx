import React, { useState } from 'react'

const Types = ({ className, setTodoData }) => {


    const allData = JSON.parse(localStorage.getItem("todos"))
    let todo = allData.slice(0) 
    const [activeButton, setActiveButton] = useState("All")

    const activeTodos = () => { 
        setActiveButton("Active")
        setTodoData(prev => {
            const activeTodo = todo.filter(prevItem => {
                if (!prevItem.complete) {
                    return prevItem
                }
            })
            return activeTodo
        })
    }

    const allTodos = () => {
        setActiveButton("All")
        setTodoData(prev => {
            console.log("all")
            return allData
        })
    }

    const complatedTodos = () => {
        setActiveButton("Complated")
        setTodoData(prev => {
            const activeTodo = todo.filter(prevItem => {
                if (prevItem.complete) {
                    console.log("c")
                    return prevItem
                }
            })
            return activeTodo
        })
    }

    return (
        <div className={`flex justify-center items-center gap-4 ${className}`}>
            <button
                onClick={() => allTodos()}
                className={`cursor-pointer text-[14px] active:scale-95 duration-200 hover:opacity-100 dark:text-white text-colorDark   ${activeButton === 'All' ? 'dark:text-colorLight opacity-100 font-semibold' : 'opacity-60'}`}>
                All
            </button>

            <button
                onClick={() => activeTodos()}
                className={`cursor-pointer text-[14px] active:scale-95 duration-200 hover:opacity-100 dark:text-white text-colorDark   ${activeButton === 'Active' ? 'dark:text-colorLight opacity-100 font-semibold' : 'opacity-60'}`}>
                Active
            </button>

            <button
                onClick={() => complatedTodos()}
                className={`cursor-pointer text-[14px] active:scale-95 duration-200 hover:opacity-100 dark:text-white text-colorDark   ${activeButton === 'Complated' ? 'dark:text-colorLight opacity-100 font-semibold ' : 'opacity-60'}`}>
                Complated
            </button>
        </div>
    )
}

export default Types
