import React from "react"

function Sidebar({
  projects,
  onAddProject,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <div className='w-72 rounded-tr-xl bg-black h-full flex flex-col items-center py-20'>
      <h1 className='text-2xl text-white text-center font-semibold uppercase'>
        My projects
      </h1>
      <button
        className='text-white flex items-center justify-center w-64 bg-amber-500 rounded-lg p-2 my-8'
        onClick={onAddProject}
      >
        <i className='bx bx-plus  text-2xl'></i>
        Add project
      </button>
      <div>
        {projects.length > 0 && (
          <ul className='text-white text-lg w-60'>
            {projects.map((project) => {
              let cssClasses =
                "text=white w-full my-4 font-semibold hover:bg-amber-600 hover:cursor-pointer hover:text-black p-2"
              if (project.id === selectedProjectId) {
                cssClasses +=
                  " bg-amber-500 text-white font-bold ml-6 rounded-l-lg"
              } else cssClasses += " rounded-lg"
              return (
                <li
                  key={project.id}
                  onClick={() => onSelectProject(project.id)}
                  className={cssClasses}
                >
                  {project.title}
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Sidebar
