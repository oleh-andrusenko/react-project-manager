import { useState } from "react"

import NewProject from "./components/Project/NewProject"
import NoProject from "./components/Project/NoProject"
import Project from "./components/Project/Project"
import Sidebar from "./components/Sidebar"

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: [],
    tasks: [],
  })

  function handleSelectProject(id) {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProject: id,
      }
    })
  }

  function handleAddProject() {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProject: null,
      }
    })
  }

  function addProject(projectData) {
    setProjectsState((prev) => {
      const projectId = Math.random()
      const newProject = {
        ...projectData,
        id: projectId,
      }
      return {
        ...prev,
        selectedProject: undefined,
        projects: [...prev.projects, newProject],
      }
    })
  }

  function resetProject() {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProject: undefined,
      }
    })
  }

  function handleDeleteProject() {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProject: undefined,
        projects: prev.projects.filter(
          (project) => project.id !== prev.selectedProject
        ),
      }
    })
  }

  function handleAddTask(text) {
    setProjectsState((prev) => {
      const taskId = Math.random()
      const newTask = {
        text: text,
        projectId: prev.selectedProject,
        taskId: taskId,
      }
      return {
        ...prev,
        tasks: [...prev.tasks, newTask],
      }
    })
  }

  function handleDeleteTask(taskId) {
    setProjectsState((prev) => {
      return {
        ...prev,
        tasks: prev.tasks.filter((task) => task.taskId !== taskId),
      }
    })
  }

  let selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProject
  )

  let content = (
    <Project
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks.filter(
        (task) => task.projectId === projectsState.selectedProject
      )}
    />
  )

  if (projectsState.selectedProject === null) {
    content = <NewProject onAdd={addProject} onCancel={resetProject} />
  } else if (projectsState.selectedProject === undefined) {
    content = <NoProject project={projectsState.selectedProject} />
  }

  return (
    <div className='flex pt-14 max-h-screen h-screen'>
      <Sidebar
        projects={projectsState.projects}
        onAddProject={handleAddProject}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProject}
      />
      {content}
    </div>
  )
}

export default App
