import { forwardRef, Ref, useImperativeHandle, useState } from "react"

export type CounterRef = {
    reset: () => void
}

type CounterProps = {
    initValue?: number
}


const Counter = ({ initValue }: CounterProps, ref: Ref<CounterRef>) => {
    const [count, setCount] = useState(initValue ?? 0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0)
    }

    useImperativeHandle(ref, () => ({
        reset,
    }))

    return (
        <div>
            <div>Count: {count}</div>
            <div><button onClick={increment}>Increment</button></div>
            <div><button onClick={decrement}>Decrement</button></div>
            {/* <div><button onClick={reset}>Reset</button></div> */}
        </div>
    )
}

export default forwardRef(Counter)