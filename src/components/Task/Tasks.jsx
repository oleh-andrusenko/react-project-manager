import React from "react"
import TaskItem from "./TaskItem"
import NewTask from "./NewTask"

function Tasks({ tasks, onAddTask, onDeleteTask }) {
  return (
    <>
      <p className='text-4xl font-bold text-slate-600 mb-4'>Tasks</p>
      <NewTask onAddTask={onAddTask} />
      {tasks.length === 0 && (
        <p className='text-lg text-slate-600'>
          This project doesn't contain any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <div>
          <ul>
            {tasks.map((task) => (
              <TaskItem task={task} onDelete={onDeleteTask} />
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default Tasks
