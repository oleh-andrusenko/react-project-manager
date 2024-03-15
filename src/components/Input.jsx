import { forwardRef } from "react"

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  return (
    <p className='w-full flex flex-col'>
      <label className='text-xl font-semibold'>{label}</label>
      {textarea ? (
        <textarea ref={ref} {...props} />
      ) : (
        <input ref={ref} {...props} />
      )}
    </p>
  )
})

export default Input
