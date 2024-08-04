import { useRef } from "react"
import Counter, { CounterRef } from "./Counter"

const UseImperative = () => {
    const counterRef = useRef<CounterRef>(null)

  const onResetCounter = () => counterRef.current?.reset()

  return (
    <>
      <Counter ref={counterRef} />
      <button onClick={onResetCounter}>
        Reset From Parent
      </button>
    </>
  )
}

export default UseImperative