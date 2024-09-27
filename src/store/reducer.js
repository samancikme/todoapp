import { v4 as uuidv4 } from "uuid"
import { addNewTodo } from "./actions"

const initialState = {
  todos: [
    {
      id: uuidv4(),
      title: "Learning Javascript",
      complated: false,
    },
    {
      id: uuidv4(),
      title: "Learning Javascript",
      complated: false,
    },
    {
      id: uuidv4(),
      title: "Learning Javascript",
      complated: false,
    },
  ],
  complatedTodos: JSON.parse(localStorage.getItem("todos")).filter(todo => {
    if(todo.complete){
        return todo
    }
  }),
  activeTodos: JSON.parse(localStorage.getItem("todos")).filter(todo => {
    if(!todo.complete){
        return todo
    }
  }),
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case addNewTodo().type:
      return {
        todos: [...state.todos, action.payload],
        complated: [...state.complated, false],
        active: [...state.active, false],
      }
    case "TOGGLE_TODO":
      const newTodos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completedTodos: !todo.completed }
          : todo
      )
      const newComplated = [...state.complated]
      const newActive = [...state.active]
      newComplated[action.payload] = !newTodos[action.payload].completed
      newActive[action.payload] = newTodos[action.payload].completed
      return {
        todos: newTodos,
        complated: newComplated,
        active: newActive,
      }
    default:
      return state
  }
}
