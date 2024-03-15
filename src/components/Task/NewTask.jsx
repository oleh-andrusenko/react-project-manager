import { useState } from "react"

function NewTask({ onAddTask }) {
  const [task, setTask] = useState("")

  function handleTaskChange(e) {
    setTask(e.target.value)
  }

  function handleClick() {
    setTask("")
    onAddTask(task)
  }

  return (
    <div>
      <input
        type='text'
        className='w-72 p-2 bg-slate-200 mr-3 mb-8 rounded-lg'
        onChange={handleTaskChange}
        value={task}
      />
      <button
        className='w-40 p-2 bg-amber-500 rounded-lg font-bold hover:bg-amber-600'
        onClick={handleClick}
      >
        Add task
      </button>
    </div>
  )
}

export default NewTask
