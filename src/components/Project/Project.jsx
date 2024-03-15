import React from "react"
import Tasks from "../Task/Tasks"

function Project({ project, onDelete, onAddTask, onDeleteTask, tasks }) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })

  return (
    <>
      {project && (
        <div className='w-2/3 py-20 px-16'>
          <div className='w-2/3 flex justify-end '>
            <button
              className='w-28 p-2 hover:bg-red-500 rounded-lg hover:text-white font-semibold text-red-500 border-2 border-red-500 text-red bg-white'
              onClick={onDelete}
            >
              Delete
            </button>
          </div>
          <h2 className='text-4xl font-bold text-slate-600'>{project.title}</h2>
          <p className='text-slate-400 text-lg my-4'>{formattedDate}</p>

          <p className='text-xl my-4'>{project.description}</p>
          <Tasks
            tasks={tasks}
            onAddTask={onAddTask}
            onDeleteTask={onDeleteTask}
          />
        </div>
      )}
    </>
  )
}

export default Project
