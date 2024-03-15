import { useRef } from "react"
import Input from "../Input"
import Modal from "../Modal"

function NewProject({ onAdd, onCancel }) {
  const modal = useRef()
  const title = useRef()
  const description = useRef()
  const dueDate = useRef()

  function handleSave() {
    const enteredTitle = title.current.value
    const enteredDescription = description.current.value
    const enteredDueDate = dueDate.current.value

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open()
      return
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    })
  }

  return (
    <>
      <Modal ref={modal} buttonCaption='Close'>
        <h2 className='text-lg font-bold text-red-500'>Invalid input</h2>
        <p className='text-lg my-1'> Provide correct data and try again</p>
      </Modal>
      <div className='w-2/3 h-full px-24 py-20'>
        <h2 className='text-2xl font-bold my-4'>New project</h2>
        <menu className='w-2/3 flex justify-end items-center gap-2 my-4'>
          <button
            className='w-24 p-2 bg-green-500 text-white rounded-lg font-semibold'
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className='w-24 p-2 bg-red-500 text-white rounded-lg font-semibold'
            onClick={onCancel}
          >
            Cancel
          </button>
        </menu>
        <Input
          ref={title}
          type='text'
          label='Title'
          className='w-2/3 p-2 my-2 bg-slate-200'
        />
        <Input
          ref={description}
          label='Description'
          textarea
          className='w-2/3 p-2 my-2 bg-slate-200'
        />
        <Input
          ref={dueDate}
          type='date'
          label='Due Date'
          className='w-2/3 p-2 my-2 bg-slate-200'
        />
      </div>
    </>
  )
}

export default NewProject
