import React from "react"

function TaskItem({ task, onDelete }) {
  return (
    <li
      key={task.taskId}
      className='w-full p-4 border-b-4 border-slate-300 my-4  flex items-center justify-between'
    >
      {task.text}
      <i
        className='bx bxs-trash text-2xl hover:text-red-500 hover:cursor-pointer'
        onClick={() => onDelete(task.taskId)}
      ></i>
    </li>
  )
}

export default TaskItem
