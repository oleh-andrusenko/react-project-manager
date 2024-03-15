import React from "react"
import noProject from "../../assets/no-projects.png"

function NoProject({ project }) {
  return (
    <>
      {!project && (
        <div className='m-auto text-3xl w-[32rem] text-center'>
          <img
            src={noProject}
            alt='No projects selected'
            className='w-32 h-32 m-auto my-4'
          />
          No project selected. <br />
          Use the button on sidebar to creat new or select an existing project
          below
        </div>
      )}
    </>
  )
}

export default NoProject
