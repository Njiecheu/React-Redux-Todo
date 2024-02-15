import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { addTodo, updateSearchTerm } from '../redux/actions'
import FilterButton from './FilterButton'
import TodoList from './TodoList'

const Todo = () => {
    const dispatch = useDispatch()
    const [newTodoText, setNewTodoText] = useState("")
    const [searchTerm, setSearchTerm] = useState("")
    const handleAddToDo = (text) => {
        dispatch(addTodo(text))
    }
    // console.log(newTodoText)
    const handleAddToDoClick = () => {
        if (newTodoText.trim() !== "") {
            handleAddToDo(newTodoText.trim())
            setNewTodoText("")
        }
    }

    const handleSearchChange = (value) => {
        setSearchTerm(value)
        dispatch(updateSearchTerm(value))
    }
  return (
    <div className='max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded'>
        <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">PERSONNAL TODO APP</h2>

        {/*input text and btn*/}
        <div className="flex items-center mb-4 ">
            <input value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)}
                type="text" name="addTodoInput" id="addTodoInput" placeholder="Add Todo"
                className="w-full mr-2 p-2 border-l-2 border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <button
                onClick={handleAddToDoClick}
                className="flex justify-center items-center gap-2 w-10 h-8 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#6293f0] via-[#6293f0] to-[#6293f0] hover:shadow-xl hover:shadow-blue-500 hover:scale-105 duration-300 hover:from-[#6293f0] hover:to-[#6293f0]"
                >
                <svg className="w-5 fill-white" viewBox="0 0 15 15">
                    <svg
                    className="w-6 h-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                    ></path>
                    </svg>
                </svg>
            </button>

        </div>

        {/* filter and search*/}
        <div className='flex flex-col md:flex-row items-center justify-between'>
            <FilterButton />
            <div className="flex items-center mb-4 md:mb-0">
            <input value={searchTerm} onChange={(e) => handleSearchChange(e.target.value)}
                type="text" name="addTodoInput" id="addTodoInput" placeholder="Search"
                className="flex-grow p-2 border-l-2 border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <button className='ml-4 p-2 bg-blue-400 text-white rounded hover:bg-blue-500
            focus:outline-none'>
                <BsSearch />
            </button>
            </div>
        </div>

        <TodoList />
    </div>
  )
}

export default Todo