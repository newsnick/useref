import { useRef } from 'react'

const MyButton = () => {
  const clickRef = useRef(null)

  const handleClick = () => {
    clickRef.current.focus()
    console.log(clickRef)
  }

  return (
    <div>
      <input type="text" ref={clickRef} />
      <button onClick={handleClick}>Click here</button>
    </div>
  )
}

export default MyButton
