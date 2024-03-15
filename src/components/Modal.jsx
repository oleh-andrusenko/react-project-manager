import React, { forwardRef, useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom"

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef()

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal()
      },
    }
  })

  return createPortal(
    <dialog
      ref={dialog}
      className='w-1/4 h-48 p-4 text-center rounded-lg backdrop:bg-stone-900/90'
    >
      {children}
      <form method='dialog'>
        <button className='w-32 p-2 bg-amber-500 rounded-lg font-semibold my-2'>
          {buttonCaption}
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  )
})

export default Modal
